import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';

@Injectable()
export class InvestmentsService {
  constructor(private prisma: PrismaService) {}

  async create(createInvestmentDto: CreateInvestmentDto, userId: string) {
    return this.prisma.investment.create({
      data: {
        ...createInvestmentDto,
        userId,
        lastUpdated: new Date(),
      },
      include: {
        user: true,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.investment.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        history: true,
      },
    });
  }

  async findOne(id: string, userId: string) {
    return this.prisma.investment.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        user: true,
        history: true,
      },
    });
  }

  async update(id: string, updateInvestmentDto: UpdateInvestmentDto, userId: string) {
    return this.prisma.investment.update({
      where: {
        id,
        userId,
      },
      data: {
        ...updateInvestmentDto,
        lastUpdated: new Date(),
      },
      include: {
        user: true,
        history: true,
      },
    });
  }

  async remove(id: string, userId: string) {
    return this.prisma.investment.delete({
      where: {
        id,
        userId,
      },
    });
  }

  async getInvestmentTypes() {
    return this.prisma.investment.findMany({
      select: {
        type: true,
      },
      distinct: ['type'],
    });
  }

  async addHistoryEntry(userId: string, investmentId: string, value: number) {
    const date = new Date();
    return this.prisma.investmentHistory.create({
      data: {
        investmentId,
        userId,
        value,
        date,
      },
    });
  }

  async getHistory(investmentId: string) {
    return this.prisma.investmentHistory.findMany({
      where: { investmentId },
      orderBy: { date: 'asc' },
    });
  }
} 
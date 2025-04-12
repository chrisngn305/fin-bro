import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';

@Injectable()
export class FundsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createFundDto: CreateFundDto) {
    return this.prisma.fund.create({
      data: {
        ...createFundDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.fund.findMany({
      where: { userId },
    });
  }

  async findOne(userId: string, id: string) {
    return this.prisma.fund.findUnique({
      where: { id, userId },
    });
  }

  async update(userId: string, id: string, updateFundDto: UpdateFundDto) {
    return this.prisma.fund.update({
      where: { id, userId },
      data: updateFundDto,
    });
  }

  async remove(userId: string, id: string) {
    return this.prisma.fund.delete({
      where: { id, userId },
    });
  }
} 
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';

@Injectable()
export class DebtService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createDebtDto: CreateDebtDto) {
    return this.prisma.debt.create({
      data: {
        ...createDebtDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.debt.findMany({
      where: { userId },
    });
  }

  async findOne(userId: string, id: string) {
    return this.prisma.debt.findUnique({
      where: { id, userId },
    });
  }

  async update(userId: string, id: string, updateDebtDto: UpdateDebtDto) {
    return this.prisma.debt.update({
      where: { id, userId },
      data: updateDebtDto,
    });
  }

  async remove(userId: string, id: string) {
    return this.prisma.debt.delete({
      where: { id, userId },
    });
  }
} 
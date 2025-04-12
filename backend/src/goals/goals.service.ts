import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createGoalDto: CreateGoalDto) {
    return this.prisma.goal.create({
      data: {
        ...createGoalDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.goal.findMany({
      where: { userId },
      include: { contributions: true },
    });
  }

  async findOne(userId: string, id: string) {
    return this.prisma.goal.findUnique({
      where: { id, userId },
      include: { contributions: true },
    });
  }

  async update(userId: string, id: string, updateGoalDto: UpdateGoalDto) {
    return this.prisma.goal.update({
      where: { id, userId },
      data: updateGoalDto,
    });
  }

  async remove(userId: string, id: string) {
    return this.prisma.goal.delete({
      where: { id, userId },
    });
  }
} 
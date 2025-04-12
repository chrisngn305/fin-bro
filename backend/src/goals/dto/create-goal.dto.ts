import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateGoalDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  targetAmount: number;

  @IsNumber()
  currentAmount: number;

  @IsDate()
  targetDate: Date;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  priority?: string;
} 
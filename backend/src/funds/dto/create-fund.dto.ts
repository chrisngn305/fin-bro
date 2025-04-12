import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateFundDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsString()
  @IsOptional()
  linkedAccountId?: string;
} 
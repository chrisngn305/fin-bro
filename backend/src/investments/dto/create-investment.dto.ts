import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateInvestmentDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  symbol?: string;

  @IsString()
  type: string;

  @IsNumber()
  value: number;

  @IsNumber()
  shares: number;

  @IsNumber()
  price: number;

  @IsNumber()
  costBasis: number;

  @IsNumber()
  return: number;

  @IsNumber()
  returnPercentage: number;

  @IsUUID()
  userId: string;
} 
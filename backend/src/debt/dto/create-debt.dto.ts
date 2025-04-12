import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDebtDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  remainingBalance: number;

  @IsNumber()
  interestRate: number;

  @IsNumber()
  monthlyPayment: number;

  @IsString()
  dueDate: string;

  @IsDate()
  nextPaymentDate: Date;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsNumber()
  payoffProgress: number;
} 
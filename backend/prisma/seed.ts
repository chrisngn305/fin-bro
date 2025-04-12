import { PrismaClient } from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
    },
  });

  // Create sample investments
  const investments = await Promise.all([
    prisma.investment.upsert({
      where: { id: '1' },
      update: {},
      create: {
        name: 'Apple Inc.',
        symbol: 'AAPL',
        type: 'Stocks',
        value: 10000,
        shares: 50,
        price: 200,
        costBasis: 9000,
        return: 1000,
        returnPercentage: 11.11,
        lastUpdated: new Date(),
        userId: user.id,
      },
    }),
    prisma.investment.upsert({
      where: { id: '2' },
      update: {},
      create: {
        name: 'US Treasury Bonds',
        type: 'Bonds',
        value: 5000,
        shares: 5,
        price: 1000,
        costBasis: 5000,
        return: 0,
        returnPercentage: 0,
        lastUpdated: new Date(),
        userId: user.id,
      },
    }),
    prisma.investment.upsert({
      where: { id: '3' },
      update: {},
      create: {
        name: 'Downtown Apartment',
        type: 'Real Estate',
        value: 250000,
        shares: 1,
        price: 250000,
        costBasis: 200000,
        return: 50000,
        returnPercentage: 25,
        lastUpdated: new Date(),
        userId: user.id,
      },
    }),
  ]);

  // Create sample investment history
  await Promise.all(
    investments.map((investment) =>
      prisma.investmentHistory.create({
        data: {
          investmentId: investment.id,
          userId: user.id,
          date: new Date(),
          value: investment.value,
        },
      }),
    ),
  );

  // Create sample goals
  const goals = await Promise.all([
    prisma.goal.upsert({
      where: { id: '1' },
      update: {},
      create: {
        name: 'Buy a House',
        description: 'Save for a down payment on a house',
        targetAmount: 500000,
        currentAmount: 100000,
        targetDate: new Date('2025-12-31'),
        category: 'Housing',
        priority: 'High',
        userId: user.id,
      },
    }),
    prisma.goal.upsert({
      where: { id: '2' },
      update: {},
      create: {
        name: 'Retirement Fund',
        description: 'Save for retirement',
        targetAmount: 1000000,
        currentAmount: 250000,
        targetDate: new Date('2040-12-31'),
        category: 'Retirement',
        priority: 'High',
        userId: user.id,
      },
    }),
  ]);

  // Create sample debts
  const debts = await Promise.all([
    prisma.debt.upsert({
      where: { id: '1' },
      update: {},
      create: {
        name: 'Student Loan',
        type: 'Education',
        amount: 50000,
        remainingBalance: 45000,
        interestRate: 4.5,
        monthlyPayment: 500,
        dueDate: '2024-12-31',
        nextPaymentDate: new Date('2024-01-01'),
        startDate: new Date('2020-01-01'),
        endDate: new Date('2024-12-31'),
        payoffProgress: 10,
        userId: user.id,
      },
    }),
    prisma.debt.upsert({
      where: { id: '2' },
      update: {},
      create: {
        name: 'Car Loan',
        type: 'Auto',
        amount: 25000,
        remainingBalance: 20000,
        interestRate: 3.5,
        monthlyPayment: 450,
        dueDate: '2025-06-30',
        nextPaymentDate: new Date('2024-01-01'),
        startDate: new Date('2023-01-01'),
        endDate: new Date('2025-06-30'),
        payoffProgress: 20,
        userId: user.id,
      },
    }),
  ]);

  // Create sample funds
  const funds = await Promise.all([
    prisma.fund.upsert({
      where: { id: '1' },
      update: {},
      create: {
        name: 'Emergency Fund',
        description: 'Fund for unexpected expenses',
        amount: 15000,
        category: 'Emergency',
        startDate: new Date('2023-01-01'),
        userId: user.id,
      },
    }),
    prisma.fund.upsert({
      where: { id: '2' },
      update: {},
      create: {
        name: 'Vacation Fund',
        description: 'Fund for annual vacation',
        amount: 5000,
        category: 'Travel',
        startDate: new Date('2023-01-01'),
        userId: user.id,
      },
    }),
  ]);

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
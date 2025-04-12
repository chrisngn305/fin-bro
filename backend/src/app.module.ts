import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { InvestmentsModule } from './investments/investments.module';
import { AuthModule } from './auth/auth.module';
import { GoalsModule } from './goals/goals.module';
import { FundsModule } from './funds/funds.module';
import { DebtModule } from './debt/debt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    InvestmentsModule,
    AuthModule,
    GoalsModule,
    FundsModule,
    DebtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

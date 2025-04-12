/*
  Warnings:

  - Added the required column `userId` to the `GoalContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `InvestmentHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GoalContribution" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InvestmentHistory" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Fund" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT,
    "startDate" TIMESTAMP(3),
    "linkedAccountId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Fund_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvestmentHistory" ADD CONSTRAINT "InvestmentHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoalContribution" ADD CONSTRAINT "GoalContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fund" ADD CONSTRAINT "Fund_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

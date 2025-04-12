/*
  Warnings:

  - You are about to drop the column `current` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `deadline` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `linkedFund` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `target` on the `Goal` table. All the data in the column will be lost.
  - Added the required column `currentAmount` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetAmount` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetDate` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GoalContribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "current",
DROP COLUMN "deadline",
DROP COLUMN "linkedFund",
DROP COLUMN "startDate",
DROP COLUMN "target",
ADD COLUMN     "currentAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "priority" TEXT,
ADD COLUMN     "targetAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "targetDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GoalContribution" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

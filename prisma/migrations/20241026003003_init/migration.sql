/*
  Warnings:

  - You are about to drop the column `budget` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `target` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConsumerData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GeneratedContent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Insight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trend` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campaignId` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentiment` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Campaign" DROP CONSTRAINT "Campaign_userId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "Insight" DROP CONSTRAINT "Insight_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Insight" DROP CONSTRAINT "Insight_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Trend" DROP CONSTRAINT "Trend_consumerDataId_fkey";

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "budget",
DROP COLUMN "endDate",
DROP COLUMN "language",
DROP COLUMN "startDate",
DROP COLUMN "status",
DROP COLUMN "target",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB,
ADD COLUMN     "insights" JSONB,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "comment",
DROP COLUMN "contentId",
DROP COLUMN "rating",
DROP COLUMN "userId",
ADD COLUMN     "campaignId" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "sentiment" TEXT NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "ConsumerData";

-- DropTable
DROP TABLE "GeneratedContent";

-- DropTable
DROP TABLE "Insight";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Trend";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "RegionalTrend" (
    "id" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "trend" TEXT NOT NULL,
    "strength" DOUBLE PRECISION NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegionalTrend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

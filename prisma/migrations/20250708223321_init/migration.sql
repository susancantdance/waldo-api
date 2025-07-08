/*
  Warnings:

  - You are about to drop the `Found` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Found" DROP CONSTRAINT "Found_friendsId_fkey";

-- DropForeignKey
ALTER TABLE "Found" DROP CONSTRAINT "Found_playersId_fkey";

-- AlterTable
ALTER TABLE "Players" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "start" DROP NOT NULL,
ALTER COLUMN "end" DROP NOT NULL;

-- DropTable
DROP TABLE "Found";

-- CreateIndex
CREATE UNIQUE INDEX "Friends_name_key" ON "Friends"("name");

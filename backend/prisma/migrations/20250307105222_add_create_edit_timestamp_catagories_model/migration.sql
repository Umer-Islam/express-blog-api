/*
  Warnings:

  - Added the required column `updateAt` to the `Catagories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catagories" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

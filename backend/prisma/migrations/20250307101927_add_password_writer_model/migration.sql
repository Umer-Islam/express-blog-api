/*
  Warnings:

  - Added the required column `hashed_password` to the `Writer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Writer" ADD COLUMN     "hashed_password" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `metadata` to the `nexflorun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nexflorun" ADD COLUMN     "metadata" JSONB NOT NULL;

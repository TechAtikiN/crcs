/*
  Warnings:

  - Made the column `dateOfRegistration` on table `societies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "societies" ALTER COLUMN "dateOfRegistration" SET NOT NULL,
ALTER COLUMN "dateOfRegistration" SET DATA TYPE TEXT;

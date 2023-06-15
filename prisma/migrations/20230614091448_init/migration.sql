/*
  Warnings:

  - You are about to drop the `Society` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Society";

-- CreateTable
CREATE TABLE "societies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "areaOfOperation" TEXT NOT NULL,
    "dateOfRegistration" TIMESTAMP(3) NOT NULL,
    "sectorType" TEXT NOT NULL,

    CONSTRAINT "societies_pkey" PRIMARY KEY ("id")
);

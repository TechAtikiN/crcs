-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "societyName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT,
    "typeOfSociety" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "pan" TEXT NOT NULL,
    "tan" TEXT NOT NULL,
    "serviceTaxNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

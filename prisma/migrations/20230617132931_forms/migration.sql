-- CreateTable
CREATE TABLE "forms" (
    "email" TEXT NOT NULL,
    "input1" TEXT NOT NULL,
    "input2" TEXT NOT NULL,
    "input3" TEXT NOT NULL,
    "input4" TEXT NOT NULL,
    "input5" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "forms_email_key" ON "forms"("email");

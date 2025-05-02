-- CreateEnum
CREATE TYPE "ClassDate" AS ENUM ('MWF', 'MW', 'W', 'TTH', 'T', 'TH', 'NONE');

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "pin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "classNumber" TEXT NOT NULL,
    "sectionNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "date" "ClassDate" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "degreePlanId" INTEGER,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Degree_Plan" (
    "id" SERIAL NOT NULL,
    "degreePlanName" TEXT NOT NULL,
    "semester" TEXT NOT NULL,

    CONSTRAINT "Degree_Plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_degreePlanId_fkey" FOREIGN KEY ("degreePlanId") REFERENCES "Degree_Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

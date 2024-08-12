-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "createdAt" VARCHAR(255) NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

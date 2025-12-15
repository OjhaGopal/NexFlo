-- CreateTable
CREATE TABLE "nexflorun" (
    "id" TEXT NOT NULL,
    "nexflowId" TEXT NOT NULL,

    CONSTRAINT "nexflorun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nexflorun" ADD CONSTRAINT "nexflorun_nexflowId_fkey" FOREIGN KEY ("nexflowId") REFERENCES "nexflo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

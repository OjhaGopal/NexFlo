-- CreateTable
CREATE TABLE "nexflowoutbox" (
    "id" TEXT NOT NULL,
    "nexflowrunId" TEXT NOT NULL,

    CONSTRAINT "nexflowoutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nexflowoutbox_nexflowrunId_key" ON "nexflowoutbox"("nexflowrunId");

-- AddForeignKey
ALTER TABLE "nexflowoutbox" ADD CONSTRAINT "nexflowoutbox_nexflowrunId_fkey" FOREIGN KEY ("nexflowrunId") REFERENCES "nexflorun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

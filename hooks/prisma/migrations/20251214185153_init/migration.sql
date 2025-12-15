-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "nexflo" (
    "id" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "nexflo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "nexfloId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "action" (
    "id" TEXT NOT NULL,
    "nexfloId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,

    CONSTRAINT "action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvalableAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvalableAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvalableTrigger" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AvalableTrigger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_nexfloId_key" ON "Trigger"("nexfloId");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "AvalableTrigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_nexfloId_fkey" FOREIGN KEY ("nexfloId") REFERENCES "nexflo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action" ADD CONSTRAINT "action_nexfloId_fkey" FOREIGN KEY ("nexfloId") REFERENCES "nexflo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action" ADD CONSTRAINT "action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvalableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

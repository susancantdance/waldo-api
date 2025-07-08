-- CreateTable
CREATE TABLE "Friends" (
    "id" SERIAL NOT NULL,
    "x1" INTEGER NOT NULL,
    "x2" INTEGER NOT NULL,
    "y1" INTEGER NOT NULL,
    "y2" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Found" (
    "id" SERIAL NOT NULL,
    "playersId" INTEGER NOT NULL,
    "friendsId" INTEGER,
    "found" BOOLEAN NOT NULL,

    CONSTRAINT "Found_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Found_playersId_key" ON "Found"("playersId");

-- AddForeignKey
ALTER TABLE "Found" ADD CONSTRAINT "Found_playersId_fkey" FOREIGN KEY ("playersId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Found" ADD CONSTRAINT "Found_friendsId_fkey" FOREIGN KEY ("friendsId") REFERENCES "Friends"("id") ON DELETE SET NULL ON UPDATE CASCADE;

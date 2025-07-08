const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function startGame(startTime) {
  const userID = await prisma.players.create({
    data: {
      start: new Date(startTime),
    },
  });
  return userID;
}

async function getFriend(name) {
  const coords = await prisma.friends.findUnique({
    where: {
      name: name,
    },
    select: {
      x1: true,
      x2: true,
      y1: true,
      y2: true,
    },
  });

  return coords;
}

async function addWinner(id, name) {
  const confirm = await prisma.players.update({
    where: {
      id: id,
    },
    data: {
      end: new Date(Date.now()),
      name: name,
    },
  });
}

async function deleteIdle() {
  const confirm = await prisma.players.deleteMany({
    where: {
      AND: [
        //has it been more than 5 minutes AND there is no end?
        { start: { lt: new Date(Date.now() - 300000) } },
        { end: null },
      ],
    },
  });

  return confirm;
}

async function getLeader() {
  const confirm = await prisma.players.findMany({
    where: {
      NOT: { name: null },
    },
    select: {
      id: true,
      name: true,
      start: true,
      end: true,
    },
  });
  console.log(confirm);
  return confirm;
}

module.exports = {
  startGame,
  getFriend,
  addWinner,
  deleteIdle,
  getLeader,
};

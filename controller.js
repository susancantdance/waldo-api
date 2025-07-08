const db = require("./queries");
require("dotenv").config();

async function startGame(req, res, next) {
  console.log("START GAME! " + req.body.start);
  const user = await db.startGame(req.body.start);
  console.log("UserID " + user.id);
  res.json(user.id);
}

async function getFriend(req, res, next) {
  console.log("GET FRIEND! " + req.body.name);
  const coords = await db.getFriend(req.body.name);
  res.json({ x1: coords.x1, x2: coords.x2, y1: coords.y1, y2: coords.y2 });
}

async function addWinner(req, res, next) {
  const confirm = await db.addWinner(req.body.id, req.body.name);
  res.json(confirm);
}

async function deleteIdle(req, res, next) {
  const confirm = await db.deleteIdle();
  res.json(confirm);
}

async function getLeader(req, res, next) {
  const confirm = await db.getLeader();
  console.log(`controller ${JSON.stringify(confirm)}`);
  res.json({ leaders: confirm });
}

module.exports = {
  startGame,
  getFriend,
  addWinner,
  deleteIdle,
  getLeader,
};

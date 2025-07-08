const { Router } = require("express");
const cors = require("cors");
const mainRouter = Router();
const mainController = require("./controller");

mainRouter.use(cors());
mainRouter.post("/", mainController.startGame);
mainRouter.post("/guess", mainController.getFriend);
mainRouter.post("/winner", mainController.addWinner);
mainRouter.delete("/delete", mainController.deleteIdle);
mainRouter.get("/leader", mainController.getLeader);

module.exports = mainRouter;

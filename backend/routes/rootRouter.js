const { Router } = require("express");
const { rootGet } = require("../controllers/rootController");
const rootRouter = Router();

rootRouter.get("/", rootGet);

module.exports = rootRouter;

const { Router } = require("express");
const {
  postsGet,
  postsPost,
  postsUpdate,
  postsDelete,
} = require("../controllers/postsController");
const postsRouter = Router();

postsRouter.get("/", postsGet);
postsRouter.post("/", postsPost);
postsRouter.put("/", postsUpdate);
postsRouter.delete("/", postsDelete);
module.exports = postsRouter;

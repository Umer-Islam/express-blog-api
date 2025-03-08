const { Router } = require("express");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  writerIdPostsGet,
} = require("../controllers/postsController");
const postsRouter = Router();

postsRouter.get("/", postsGet);
postsRouter.post("/:writerId", writerIdPostsGet);
postsRouter.post("/create", postsCreate);
postsRouter.put("/:postId", postsUpdate);
postsRouter.delete("/:postId", postsDelete);
module.exports = postsRouter;

const { Router } = require("express");
const {
  commentsGet,
  commentsByPostGet,
  commentsPost,
  commentDelete,
} = require("../controllers/commentsController");
const { getComments } = require("../db/queries");
const commentsRouter = Router();

// get all comments
commentsRouter.get("/", commentsGet);
//get comments for a post
commentsRouter.get("/:postId", commentsByPostGet);
//create a comment
commentsRouter.post("/post/:postId", commentsPost);
// delete a comment
commentsRouter.delete("/:postId/:commentId", commentDelete);

module.exports = commentsRouter;

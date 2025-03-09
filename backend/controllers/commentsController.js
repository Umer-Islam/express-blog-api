const prisma = require("../db/pool");
const db = require("../db/queries");
const commentsController = {
  commentsGet: async (req, res) => {
    try {
      //   const { postId } = req.params;
      const comments = await db.getComments();
      //   console.log(comments);
      res.json({ status: "success", data: comments });
    } catch (error) {
      res.json({ status: "error", data: error });
    }
  },
  commentsByPostGet: async (req, res) => {
    try {
      const { postId } = req.params;
      //   console.log(req.params);
      const comments = await db.getCommentsForPostId(+postId);
      res.json({ status: "success", data: comments });
    } catch (error) {
      res.json({ status: "error", data: error });
    }
  },
  commentsPost: async (req, res) => {
    try {
      const { postId } = req.params;
      //   console.log(postId);
      const { username, email, content } = req.body;
      //   console.log(req.body);
      await db.createComment(username, email, +postId, content);
      res.status(201).json({ status: "success", message: "comment created" });
    } catch (error) {
      //   console.log(error);
      res.json({ status: "error", data: error });
    }
  },
  commentDelete: async (req, res) => {
    const { postId, commentId } = req.params;
    try {
      await db.deleteComment(+postId, +commentId);
      res.json({ status: "success", message: "comment deleted" });
    } catch (error) {
      res.json({ status: "error", data: error });
    }
  },
};

module.exports = commentsController;

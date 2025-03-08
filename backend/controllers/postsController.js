const db = require("../db/queries");

const postsController = {
  postsGet: async (req, res) => {
    try {
      const posts = await db.getallPosts();

      res.json({ status: "success", message: "data fetched", posts });
    } catch (error) {
      res.json({ status: "error", error });
    }
  },
  writerIdPostsGet: async (req, res) => {
    try {
      const { writerId } = req.params;
      // console.log(req.params);
      const posts = await db.getAllPostsByWriterId(+writerId);
      console.log(posts);
      res.json({ status: "success", posts });
    } catch (error) {
      res.json({ status: "error", error });
    }
  },
  postsCreate: async (req, res) => {
    try {
      const { title, body, writerId } = req.body;
      console.log(title + body + writerId);
      await db.createPost(title, body, writerId);
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error });
    }
  },

  postsUpdate: async (req, res) => {
    try {
      const { postId } = req.params;
      // console.log(req.params);
      const { body, title, writerId } = req.body;
      // console.log({
      //   postId: typeof postId,
      //   body,
      //   title,
      //   writerId: typeof writerId,
      // });
      await db.editPost(+postId, title, body, writerId);
      res.json({ status: "success", message: "post updated" });
    } catch (error) {
      res.json({ status: "error", error });
    }
    // res.send("posts update route");
  },
  postsDelete: async (req, res) => {
    try {
      const { postId } = req.params;
      await db.deletePost(+postId);
      res.json({ status: "success", message: `post deleted` });
    } catch (error) {
      res.json({ status: "error", error });
    }
  },
};
module.exports = postsController;

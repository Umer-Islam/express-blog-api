const prisma = require("./pool");
const db = {
  getAllWriters: async () => {
    const writers = await prisma.writer.findMany({});
    // console.log(writers);
    return writers;
  },
  createWriter: async (username, email, hashed_password, canCreatePosts) => {
    await prisma.writer.create({
      data: { username, email, hashed_password, canCreatePosts },
    });
  },
  //get all catagories
  getAllCatagories: async () => {
    const catagories = await prisma.catagories.findMany({});
    // console.log(catagories);
    return catagories;
  },
  getCatagoryById: async (id) => {
    const catagory = await prisma.catagories.findUnique({ where: { id } });
    return catagory;
  },
  //create catagory
  createCatagory: async (name) => {
    // check first if user id admin/writer
    await prisma.catagories.create({
      data: {
        name,
      },
    });
  },
  //edit catagory
  editCatagory: async (catagory_id, new_name) => {
    await prisma.catagories.update({
      where: { id: catagory_id },
      data: { name: new_name },
    });
  },
  // delete catagory
  deleteCatagory: async (id) => {
    await prisma.catagories.delete({
      where: { id },
    });
  },
  // ------------------------------------
  // get all posts
  getallPosts: async () => {
    const posts = await prisma.post.findMany({});
    // console.log(posts);
    return posts;
  },
  getAllPostsByWriterId: async (writerId) => {
    const posts = await prisma.post.findMany({ where: { writerId } });
    return posts;
  },
  // get a single post by id
  // getPostByPostId: async (params) => {},
  // create post
  createPost: async (title, body, writerId) => {
    try {
      // console.log({ title, body, writerId });
      const postCreate = await prisma.post.create({
        data: { title, body, writerId },
      });
      return postCreate;
    } catch (error) {
      return error;
    }
  },
  //edit post
  editPost: async (postId, title, body, writerId) => {
    await prisma.post.update({
      where: { id: postId },
      data: { title, body, writerId },
    });
    return "post edited";
  },
  // delete post
  deletePost: async (postId) => {
    await prisma.post.delete({ where: { id: postId } });
    return { message: "post deleted" };
  },
  // check if it is published or not
  // get writer by post id
  // ---------------------------
  // get all comments
  getComments: async () => {
    return await prisma.comments.findMany({});
  },
  getCommentsForPostId: async (postId) => {
    const comments = await prisma.comments.findMany({ where: { postId } });
    // console.log(comments);
    return comments;
  },
  // create comment
  createComment: async (username, email, postId, content) => {
    // if (typeof postId !== "number") {
    //   postId = +postId;
    //   console.log(typeof postId);
    // }
    await prisma.comments.create({
      data: { username, email, content, postId },
    });
  },
  // delete comment make sure that only writer can do that
  deleteComment: async (postId, commentId) => {
    await prisma.comments.delete({ where: { id: commentId, postId } });
  },
};
// db.createComment("whatever", "w@w", 34, "just a test comment");
// db.deletePost(23)
// db.editPost(33, "hehe(edited)", "whatever", 1);
// db.createWriter("jill1", "jill1@jill.com", "3123213", true);
// db.getAllWriters();
// db.createCatagory("programming languages");
// db.editCatagory(4, "whatever");
// db.deleteCatagory(4);
// db.getAllCatagories();
// db.createPost("title of post 1", "body of post 1",1);
// db.getallPosts();
// db.getCommentsForPostId(34);
// db.getComments();
module.exports = db;

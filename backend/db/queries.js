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
    console.log(catagories);
    return catagories;
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
    console.log(posts);
    return posts;
  },
  getAllPostsByWriterId: async (writer_id) => {},
  // get a single post by id
  getPostByPostId: async (params) => {},
  // create post
  createPost: async (title, body, writerId) => {
    await prisma.post.create({
      data: { title, body, writerId },
    });
  },
  //edit post
  
  // delete post
  // check if it is published or not
  // get writer by post id
  // ---------------------------
  // get all comments for a post
  // create comment
  // delete comment make sure that only writer can do that
  //
};
// db.createWriter("jill1", "jill1@jill.com", "3123213", true);
// db.getAllWriters();
// db.createCatagory("programming languages");
// db.editCatagory(4, "whatever");
// db.deleteCatagory(4);
// db.getAllCatagories();
db.createPost("title of post 1", "body of post 1",1);
db.getallPosts();
module.exports = db;

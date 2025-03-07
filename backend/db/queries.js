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
};
// db.createWriter("jill1", "jill1@jill.com", "3123213", true);
// db.getAllWriters();

module.exports = db;

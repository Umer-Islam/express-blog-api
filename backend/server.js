const express = require("express");
const rootRouter = require("./routes/rootRouter");
const postsRouter = require("./routes/postsRouter");
const catagoriesRouter = require("./routes/catagoriesRouter");
const commentsRouter = require("./routes/commentsRouter");
const app = express();
require("dotenv").config();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/", rootRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/catagory", catagoriesRouter);
app.use("/api/v1/comments", commentsRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`);
});

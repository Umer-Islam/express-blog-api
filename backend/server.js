const express = require("express");
const rootRouter = require("./routes/rootRouter");
const postsRouter = require("./routes/postsRouter");
const catagoriesRouter = require("./routes/catagoriesRouter");
const app = express();
require("dotenv").config();

app.use("/", rootRouter);
app.use("/posts", postsRouter);
app.use("/catagory", catagoriesRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`);
});

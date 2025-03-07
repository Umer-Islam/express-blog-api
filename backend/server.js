const express = require("express");
const rootRouter = require("./routes/rootRouter");
const app = express();
require("dotenv").config();

app.use("/", rootRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on: http://localhost:${port}`);
});

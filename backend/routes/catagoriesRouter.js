const { Router } = require("express");
const {
  catagoriesGet,
  catagoriesPost,
  catagoriesUpdate,
  catagoriesDelete,
} = require("../controllers/catagoriesController");
const catagoriesRouter = Router();

catagoriesRouter.get("/", catagoriesGet);
catagoriesRouter.post("/", catagoriesPost);
catagoriesRouter.put("/", catagoriesUpdate);
catagoriesRouter.delete("/", catagoriesDelete);

module.exports = catagoriesRouter;

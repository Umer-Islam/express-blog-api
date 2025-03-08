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
catagoriesRouter.put("/:catagoryId", catagoriesUpdate);
catagoriesRouter.delete("/:catagoryId", catagoriesDelete);

module.exports = catagoriesRouter;

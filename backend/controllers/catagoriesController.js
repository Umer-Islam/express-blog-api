const { response } = require("express");
const db = require("../db/queries");
const catagoriesController = {
  catagoriesGet: async (req, res) => {
    try {
      const catagories = await db.getAllCatagories();
      console.log(catagories);
      res.json({ success: true, message: "data fetched", data: catagories });
    } catch (error) {
      res.json({ error: error });
    }
  },
  catagoriesPost: async (req, res) => {
    // create a cataory
    //check if user is logged in or not
    try {
      const { name } = req.body;
      // console.log(typeof name + "0--0" + name);
      await db.createCatagory(name);
      res.json({
        status: "success",
        message: "catagory  created",
      });
    } catch (error) {
      res.json({ error: error });
    }
  },
  catagoriesUpdate: async (req, res) => {
    try {
      const { catagoryId, catagoryName } = req.body;
      console.log(req.body);
      await db.editCatagory(catagoryId, catagoryName);
      res.json({
        status: "success",
        message: "catagory updated",
        catagoryId,
        catagoryName,
      });
    } catch (error) {
      res.json({ error: error });
    }
  },
  catagoriesDelete: async (req, res) => {
    try {
      const { id } = req.body;
      const catagoryName = await db.getCatagoryById(id);

      await db.deleteCatagory(id);
      res.json({
        status: "success",
        message: `catagory  ${id} named "${catagoryName.name}" deleted`,
      });
    } catch (error) {
      res.json({ error: error });
    }
  },
};
module.exports = catagoriesController;

const catagoriesController = {
  catagoriesGet: async (req, res) => {
    res.json({ message: "catagories get route" });
  },
  catagoriesPost: async (req, res) => {
    res.json({ message: "catagories post route" });
  },
  catagoriesUpdate: async (req, res) => {
    res.json({ message: "catagories update route" });
  },
  catagoriesDelete: async (req, res) => {
    res.json({ message: "catagories delete route" });
  },
};
module.exports = catagoriesController;

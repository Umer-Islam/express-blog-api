const postsController = {
  postsGet: async (req, res) => {
    res.json({ message: "posts get route" });
  },
  postsCreate: async (req, res) => {
    res.json({ message: "posts get route" });
  },
  postsPost: async (req, res) => {
    res.json({ message: "posts post route" });
  },
  postsUpdate: async (req, res) => {
    res.json({ message: "posts update route" });
  },
  postsDelete: async (req, res) => {
    res.json({ message: "posts delete route" });
  },
};
module.exports = postsController;

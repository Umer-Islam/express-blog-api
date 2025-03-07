const rootController = {
  rootGet: (req, res) => {
    res.json({ message: "root route get" });
  },
};
module.exports = rootController;

const { Category } = require("../models/category");
const slug = require("slug");

module.exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      description: req.body.description,
      slug: slug(req.body.name),
    });

    return res.status(200).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.category = async (req, res) => {
  try {
    const category = await Category.find();

    if (!category) {
      return res.status(404).json({
        message: "Categories not Found",
      });
    }

    return res.status(200).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

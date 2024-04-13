const { Category } = require("../models/category");
const { Product } = require("../models/product");

module.exports.createProduct = async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const product = new Product({
      name,
      price,
      category: categoryId,
    });

    await product.save();

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const products = await Product.find({ categoryId: categoryId }).populate(
      "category"
    );

    if (!products) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

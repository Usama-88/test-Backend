const { payment } = require("../config/stripePayment");
const {
  createProduct,
  getProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.post("/create", createProduct);
router.get("/:categoryId", getProduct);

module.exports = router;

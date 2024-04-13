const {
  createCategory,
  category,
} = require("../controllers/categoryController");

const router = require("express").Router();

router.post("/create", createCategory);
router.get("/", category);

module.exports = router;

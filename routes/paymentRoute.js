const { payment } = require("../config/stripePayment");
const router = require("express").Router();

router.post("/create-session", payment);

module.exports = router;

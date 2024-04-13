const express = require("express");
const cors = require("cors");
const databaseConfig = require("./config/databaseConfig");
const category = require("./routes/categoryRoute");
const product = require("./routes/productRoute");
const payment = require("./routes/paymentRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

databaseConfig();

app.use("/api/categories", category);
app.use("/api/products", product);
app.use("/api/payments", payment);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});

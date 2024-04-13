const mongoose = require("mongoose");

function databaseConfig() {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = databaseConfig;

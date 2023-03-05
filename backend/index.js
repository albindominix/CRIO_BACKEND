const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.set("strictQuery", false);

mongoose.connect(
  config.mongoose.url,
  config.mongoose.options,
  () => {
    console.log(`MongoDB Connected on ${config.mongoose.url}`);
    app.listen(config.port, () => {
      console.log(`App Started on Port ${config.port}`);
    });
  },
  (err) => {
    console.log(err);
  }
);

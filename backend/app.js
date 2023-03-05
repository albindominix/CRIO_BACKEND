const express = require('express');
const routes = require("./routes/v1");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use('/v1', routes);

module.exports = app;
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 8080;
const menus = require("../data/data").data;

app.listen(port, () => console.log(`listening on port ${port}`));

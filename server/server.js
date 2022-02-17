const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 8080;
const menus = require("../data/restaurant").restaurants;
const clientUsers = require("../data/clientUsers").clientUsers;
app.get("/restaurant", (req, res) => {
  try {
    res.send(menus);
  } catch (e) {
    console.log(e.message);
  }
  console.log("restaurant is", menus);
});

app.get("/clientUsers", (req, res) => {
  try {
    res.send(clientUsers);
  } catch (e) {
    console.log(e.message);
  }
  console.log("client users are", clientUsers);
});

app.listen(port, () => console.log(`listening on port ${port}`));

//automatically loads environment variables from a .env file into the process. env object
require("dotenv").config();

//start a new Express application and saves in app variable
const express = require("express");
const app = express();

//port configuration
const port = process.env.PORT || 8080;

//imports restaurants.js file
const menus = require("../data/restaurant").restaurants;

// allows you to work with the file system on your computer.
const fs = require("fs");

// used to resolve a sequence of path-segments to an absolute path
const path = require("path");
const pathObj = path.parse(__dirname); //

//recognize the incoming Request Object as a JSON Object.
app.use(express.json());

let clients = [];

//loads parsed clientUsers.txt file to CLIENTS array
const loadClients = () => {
  const dataFile = fs.readFileSync(
    `${pathObj.dir}/data/clientUsers.txt`,
    "utf8"
  );
  //parse() takes a JSON string and then transforms it into a JavaScript object
  const newDataFile = JSON.parse(dataFile);

  clients = [...newDataFile];
};

//writes stringified data to clientUsers.txt
const saveClients = () => {
  fs.writeFileSync(
    `${pathObj.dir}/data/clientUsers.txt`,
    JSON.stringify(clients, null, "\t")
  );
};

app.post("/register", (req, res) => {
  try {
    if (!req.body.client) return res.send({ success: false, errorId: 1 }); // username is empty
    loadClients();
    clients.push(req.body); // add the new user to the array
    saveClients();
    res.send({ success: true, client: req.body }); // send back to client the result
  } catch (error) {
    console.log("error in app.post", error.message);
    res.send(error.message);
  }
});
app.get("/restaurant", (req, res) => {
  try {
    res.send(menus);
  } catch (e) {
    console.log(e.message);
  }
  //console.log("restaurant is", menus);
});

//const clientUsers = require("../data/clientUsers").clientUsers;
app.get("/clientUsers", (req, res) => {
  try {
    loadClients();
    res.send(clients);
    //  console.log("clients is -----", clients);
  } catch (e) {
    console.log(e.message);
  }
  // console.log("client users are", clientUsers);
});

app.get("/profile", (req, res) => {
  try {
    loadClients();
    res.send(clients);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));

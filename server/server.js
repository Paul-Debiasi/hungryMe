const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const menus = require("../data/restaurant").restaurants;
const fs = require("fs");
const path = require("path");
const pathObj = path.parse(__dirname); //

require("dotenv").config();
app.use(express.json());

let clients = [];

const loadClients = () => {
	const dataFile = fs.readFileSync(
		`${pathObj.dir}/data/clientUsers.txt`,
		"utf8"
	);

	const newDataFile = JSON.parse(dataFile);

	clients = [...newDataFile];
};

const saveClients = () => {
	fs.writeFileSync(
		`${pathObj.dir}/data/clientUsers.txt`,
		JSON.stringify(clients, null, "\t")
	);
};

app.get("/restaurant", (req, res) => {
	try {
		res.send(menus);
	} catch (e) {
		console.log(e.message);
	}
});

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

app.listen(port, () => console.log(`listening on port ${port}`));

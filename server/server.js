require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const menus = require("../data/restaurant").restaurants;
const fs = require("fs");
const path = require("path");
const pathObj = path.parse(__dirname); //

app.use(express.json());

let clients = [];
let business = [];

const loadClients = () => {
	const dataClient = fs.readFileSync(
		`${pathObj.dir}/data/clientUsers.txt`,
		"utf8"
	);

	const newDataClient = JSON.parse(dataClient);

	clients = [...newDataClient];
};

const saveClients = () => {
	fs.writeFileSync(
		`${pathObj.dir}/data/clientUsers.txt`,
		JSON.stringify(clients, null, "\t")
	);
};
const loadBusiness = () => {
	const dataBusiness = fs.readFileSync(
		`${pathObj.dir}/data/businessUsers.txt`,
		"utf8"
	);

	const newDataBusiness = JSON.parse(dataBusiness);

	business = [...newDataBusiness];
};
const saveBusiness = () => {
	fs.writeFileSync(
		`${pathObj.dir}/data/businessUsers.txt`,
		JSON.stringify(business, null, "\t")
	);
};

app.get("/restaurant", (req, res) => {
	try {
		res.send(menus);
	} catch (e) {
		console.log(e.message);
	}
});

app.post("/clients", (req, res) => {
	console.log("Req Body", req.body);

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

app.post("/business", (req, res) => {
	try {
		if (!req.body.business) return res.send({ success: false, errorId: 1 }); // username is empty
		loadBusiness();
		business.push(req.body); // add the new user to the array
		saveBusiness();
		res.send({ success: true, client: req.body }); // send back to client the result
	} catch (error) {
		console.log("error in app.post", error.message);
		res.send(error.message);
	}
});
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

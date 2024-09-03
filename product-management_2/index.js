const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var methodOverride = require("method-override");

const app = express();

app.use(methodOverride("_method"));

database = require("./config/database");
database.connect();

const routeClient = require("./routers/client/index.route");
const routeAdmin = require("./routers/admin/index.route");

const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// use folder public
app.use(express.static("public"));

// embed const route
routeClient(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

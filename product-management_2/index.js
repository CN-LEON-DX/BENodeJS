const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require('express-session')
var flash = require('express-flash');

const app = express();

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// flash message
app.use(cookieParser('CN-LEON-DX')); // random key :ơ]
app.use(session({ cookie: { maxAge: 60000 }, secret: 'CN-LEON-DX', resave: false, saveUninitialized: false }));
app.use(flash());

database = require("./config/database");
database.connectDB();

const routeClient = require("./routers/client/index.route");
const routeAdmin = require("./routers/admin/index.route");

const port = process.env.PORT;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// use folder public
app.use(express.static(`${__dirname}/public`));

// embed const route
routeClient(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
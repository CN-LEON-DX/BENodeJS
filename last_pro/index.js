// Main file
const express = require('express');
require('dotenv').config();

const systemConfig = require("./config/system.js")

// Embed router 
const routerClient = require("./routers/client/index.route");
const routerAdmin = require("./routers/admin/index.route.js");

// Embed func to connect DB with config file
const database = require("./config/database.js");
database.connect();

// Config app
const port = process.env.PORT;
const app = express();

// config pug
app.set('views', './views');
app.set('view engine', 'pug'); 

// App locals variable can be use inside any file pug 
app.locals.prefixAdminPath = systemConfig.prefixAdmin;

// Routers call function
routerClient(app);
routerAdmin(app); 

// Embed static file folder public
app.use(express.static("public"));

// Start server
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại cổng ${port} 1`);
});

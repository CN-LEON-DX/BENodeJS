const dashboardRouter = require("./dashboard.route");
const productRouter = require("./product.route");
// File system config contains variable 
const systemConfig = require("../../config/system.js");


module.exports = (app) => {
    app.use(systemConfig.prefixAdmin + '/dashboard', dashboardRouter);
    app.use(systemConfig.prefixAdmin + '/products', productRouter);
}
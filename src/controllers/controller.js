const HomeController = require("./home.js");
const UserController = require("./user.js");
function controller(app){
    app.use("/user", UserController);
    app.use("/", HomeController);
}

module.exports = controller;
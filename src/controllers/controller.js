const jwt = require("jsonwebtoken");


const HomeController = require("./home.js");
const UserController = require("./user.js");
function controller(app){
    app.use((req, res, next) => {
        try{
            let decoded = jwt.verify(req.body.jwtToken, process.env.JWT_SECRET)
            req.authenticated = {
                status: "pass",
                id: decoded.userId
            }
        }catch (err) {
            req.authenticated = {
                status: "fail",
                id: null
            }
        }
        console.log("authenticate")
        console.log(req.authenticated)
        next();
    });
    app.use("/user", UserController);
    app.use("/", HomeController);
}

module.exports = controller;
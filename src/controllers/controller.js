const jwt = require("jsonwebtoken");

const HomeController = require("./home.js");
const UserController = require("./user.js");

// handles path generic
// CRUD operations should be handled by each individual path controller.
function controller(app){


    // check if user is authenticate on all api calls.
    // req.headers.authorization == token
    app.use((req, res, next) => {
        try{
            let decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
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
const express = require("express");
const userService = require("./../services/User.js");
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

router.use((req, res, next) => {
    console.log("hello")
    next();
});

// requires userInfo obj with id and password
router.post("/login", (req, res, next) => {
    let userInfo = req.body.userInfo;

    let user = userService.login(userInfo);
    res.status(user.httpStatus).json(user.body);
});

router.get("/:id", (req, res, next) => {
    if (req.authenticated.status == "fail") {
        res.status(403).json({
            message: "unauthorized access"
        });
        return ;
    }
    let userInfo = userService.info(req.authenticated.id);
    res.status(userInfo.httpStatus).json(userInfo.body);
});

router.use("/*", (req, res, next) => {
    res.status(404).json({
        message: "404 user controller"
    })
});

module.exports = router;
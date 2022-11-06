const express = require("express");
const userService = require("./../services/User.js");
const router = express.Router();

router.get("/:id", (req, res, next) => {
    let user = userService.login();
    res.status(user.httpStatus).json(user.body);
});

router.use("/*", (req, res, next) => {
    res.status(404).json({
        message: "404 user controller"
    })
});

module.exports = router;
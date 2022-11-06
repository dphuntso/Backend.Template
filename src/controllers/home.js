const express = require("express");
const router = express.Router();

router.get("", (req, res, next) => {
    res.status(200).json({
        message: "this is the home page. welcome"
    })
});

router.use("/*", (req, res, next) => {
    res.status(404).json({
        message: "404 home controller"
    })
});

module.exports = router;
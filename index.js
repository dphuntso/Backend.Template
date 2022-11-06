const express = require("express");
const port = require("./config.js").port;
const app = express();

const controller = require("./src/controllers/controller.js");
controller(app);

app.listen(port, () => {
    console.log("app is listening to " + port);
})
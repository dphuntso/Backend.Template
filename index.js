const express = require("express");
const app = express();

const controller = require("./src/controllers/controller.js");
controller(app);

// const port = require("./config.js").port;
const port = process.env.PORT;
app.listen(port, () => {
    console.log("app is listening to " + port);
})
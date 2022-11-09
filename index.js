const express = require("express");
const bodyParser = require('body-parser');
const controller = require("./src/controllers/controller.js");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

controller(app);

// const port = require("./config.js").port;
const port = process.env.PORT;
app.listen(port, () => {
    console.log("app is listening to " + port);
})
const response = require("./../util/response.js");

function login(){
    return response.responseBody(200, {message: "user loggedIn"})
}

module.exports = {
    login
}
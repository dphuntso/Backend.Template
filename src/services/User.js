const jwt = require("jsonwebtoken");

const response = require("./../util/response.js");

function login(userInfo){
    // verify password. bcrypt, mongo
    // sign jwt, expire 1 day
    let token = jwt.sign({userId: userInfo.id}, process.env.JWT_SECRET, "1d")
    return response.responseBody(200, token)
}

function info(userId){
    return response.responseBody(200, {
        userId: userId
    });
}

module.exports = {
    login
}
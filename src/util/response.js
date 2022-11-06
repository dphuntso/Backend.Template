function responseBody(status, body){
    return {
        httpStatus: status,
        body: body
    }
}

module.exports = {
    responseBody
};
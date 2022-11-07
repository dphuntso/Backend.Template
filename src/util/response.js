function responseBody(status, obj){
    return {
        httpStatus: status,
        body: {data: obj}
    }
}

module.exports = {
    responseBody
};
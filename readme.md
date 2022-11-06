controller should always get json Object with body and httpStatus
eg ->
const serviceResponse = userService.someFunction returns {
    httpStatus: status_number,
    body: jsonObject
}

res will always be res.status(serviceResponse.httpStatus).json(serviceResponse.body)
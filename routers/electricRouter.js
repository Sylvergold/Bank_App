const { createElect, getAll } = require('../controllers/electricityController')

const electricityRouter = require('express').Router()

electricityRouter.post("/create-electricity", createElect)
electricityRouter.get("/all-electricities", getAll)


module.exports = electricityRouter
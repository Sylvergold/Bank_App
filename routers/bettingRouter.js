const bettingRouter = require('express').Router()


const {betTrans} = require('../controllers/airtimeController')
const { createBet, getAll } = require('../controllers/bettingController')
 
bettingRouter.post("/create-bet", createBet)
bettingRouter.get("/all-bets", getAll)

module.exports = bettingRouter
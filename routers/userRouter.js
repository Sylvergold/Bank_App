const { deposit } = require("../controllers/depositController")
const { getTransactionHistory } = require("../controllers/transactionHistoryController")
const { transfer } = require("../controllers/transferController")
const { signUp, signIn, signOut } = require("../controllers/userController")
const { betTrans } = require("../controllers/utilityBettingController")
const { airtimeTrans } = require("../controllers/utilityAirtimeController")
const { elecTrans } = require("../controllers/utilityElectricityController")
const { withdraw } = require("../controllers/withdrawController")
const { authenticate } = require("../middleware/authentication")

const uploads = require("../utilityMW/multer")

const userRouter = require("express").Router()

// for user signing-up into the bank app
// router.post('/sign-up', uploads.single('profileImage'), signUp)
userRouter.post('user/sign-up', signUp)

// for user logging-in into the bank app
userRouter.post('user/sign-in', signIn)


// for user logging-out into the bank app
userRouter.post('user/sign-out',authenticate, signOut)



// for user depositing into his account
userRouter.post ("user/deposit",authenticate, deposit)

// for user traansfering out of the account
userRouter.post("user/transfer", authenticate,transfer)

// for user withdrawing into another account
userRouter.post("user/withdraw", authenticate, withdraw)

// for the user to see all transaction history
userRouter.get("user/getallmyhistory", authenticate, getTransactionHistory)

// user pay for airtime
userRouter.post('user/purchase-airtime', authenticate, airtimeTrans)

// user pay for bet
userRouter.post('user/place-bet', authenticate, betTrans)

// user pay for electricity
userRouter.post('user/pay-electbill', authenticate, elecTrans)

module.exports = userRouter
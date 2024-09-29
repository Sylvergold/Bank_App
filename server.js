const express = require('express')
const config =  require('./config/db')
const cors = require('cors')
const userRouter  = require('./routers/userRouter')
const airtimeRouter = require("./routers/airtimeRouter")
const bettingRouter = require("./routers/bettingRouter")
const electricRouter = require("./routers/electricRouter")

// const multer = require('./utilityMW/multer')
// const utilityRouter = require('./routers/utilsRouter')

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('./uploads'))

app.use("/api/v1/", userRouter)
app.use("/api/v1", airtimeRouter)
app.use("/api/v1", bettingRouter)
app.use("/api/v1", electricRouter)


// app.use("/api/v1/utility", utilityRouter)

app.use('/', (req, res)=>{
    res.send('This is a bank application  software, where you can carry ')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
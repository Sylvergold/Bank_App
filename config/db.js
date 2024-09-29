const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.DATABASE_URL

mongoose.connect(db)
.then(()=>{
  console.log('Database connecton is established')  
})
.catch((err)=>{
    console.log(`Unable to connect to datbase${err}`)
})
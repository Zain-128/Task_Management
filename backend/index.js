// Importing environment Variables
import dotenv from 'dotenv'
import app from './src/app.js'
import ConnectToMongo from './src/config/connect.js'
dotenv.config()

ConnectToMongo().then(()=>{
    app.listen(process.env.PORT , console.log("Server is Listening"))
})
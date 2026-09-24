import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import commonRouter from "./router/Common_Router.js";
import { dbConnect } from "./database/dbInfo.js";
import userRouter from "./router/User_Router.js";
import adminRouter from "./router/Admin_Router.js";
import shopOwnerRouter from "./router/ShopOwner_Router.js";

dotenv.config();

// creating server
const serverApp=express()

const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
    : true

serverApp.use(cors({ origin: allowedOrigins }))

if (!process.env.VERCEL) {
    const port = process.env.PORT || 3000
    serverApp.listen(port, () => {
        console.log(`server is listening on http://localhost:${port}`)
    })
}

//database connection function calling
dbConnect()

// configure Router in server using use() function(middleware)
serverApp.use(express.json())
serverApp.use(express.static("public")) // to tell the server that all docs

serverApp.use("/",commonRouter)
serverApp.use("/admin",adminRouter)
serverApp.use("/user",userRouter)
serverApp.use("/shopOwner",shopOwnerRouter)

export default serverApp







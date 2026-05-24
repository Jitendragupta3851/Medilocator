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

const PORTNUMBER=process.env.PORT

//creating URL for localhost
serverApp.listen(PORTNUMBER,()=>{

    console.log(`server is listening on http://localhost:${PORTNUMBER}`);
    
})
//database connection function calling
dbConnect()

// configure Router in server using use() function(middleware)
serverApp.use(cors()) //for communicate wi
serverApp.use(express.json())
serverApp.use(express.static("public")) // to tell the server that all docs

serverApp.use("/",commonRouter)
serverApp.use("/admin",adminRouter)
serverApp.use("/user",userRouter)
serverApp.use("/shopOwner",shopOwnerRouter)





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
const databaseReady = dbConnect()

const configuredOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
    : true

serverApp.use(cors({
    origin: (origin, callback) => {
        const isLocalOrigin = origin?.startsWith("http://localhost:")
        const isConfiguredOrigin = configuredOrigins === true || configuredOrigins.includes(origin)
        callback(null, !origin || isLocalOrigin || isConfiguredOrigin)
    }
}))

// Connect before accepting requests so login queries never run during startup.
if (!process.env.VERCEL) {
    const port = process.env.PORT || 3000
    databaseReady
        .then(() => {
            serverApp.listen(port, () => {
                console.log(`server is listening on http://localhost:${port}`)
            })
        })
        .catch(() => {
            console.error("server startup aborted because database connection failed")
        })
}

// configure Router in server using use() function(middleware)
serverApp.use(express.json())
serverApp.use(express.static("public")) // to tell the server that all docs

serverApp.use(async (_request, response, next) => {
    try {
        await databaseReady
        next()
    } catch (_error) {
        response.status(503).json({ message: "Database is unavailable", status: "error" })
    }
})

serverApp.use("/",commonRouter)
serverApp.use("/admin",adminRouter)
serverApp.use("/user",userRouter)
serverApp.use("/shopOwner",shopOwnerRouter)

export default serverApp







import express from "express";
import { addFeedback, registration, userLogin,profile, viewShops,searchShops,editProfile} from "../controller/User_Controller.js"
import { imageUpload } from "../middleware/ImageUpload_Middleware.js";

const userRouter=express.Router()
userRouter.post("/addFeedback",addFeedback)
userRouter.post("/register",imageUpload,registration)
userRouter.post("/userLogin",userLogin)
userRouter.get("/userProfile",profile)
userRouter.get("/viewShops",viewShops)
userRouter.get("/searchShops",searchShops)
userRouter.put("/editProfile",editProfile)




export default userRouter
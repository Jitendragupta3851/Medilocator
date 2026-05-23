import express from 'express'
import { addShop, profile, registration, shopLogin,editProfile,viewShops, updateLocation } from "../controller/ShopOwner_Controller.js"
import {imageUpload} from "../middleware/ImageUpload_Middleware.js"



const shopOwnerRouter=express.Router()
shopOwnerRouter.post("/register",imageUpload,registration)
shopOwnerRouter.post("/shopLogin",shopLogin)

shopOwnerRouter.get("/shopOwnerProfile",profile)
shopOwnerRouter.post("/addShop",addShop)
shopOwnerRouter.put("/editProfile",editProfile)
shopOwnerRouter.get("/viewShops",viewShops)
shopOwnerRouter.put("/updateLocation",updateLocation)




export default shopOwnerRouter
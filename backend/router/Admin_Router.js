import express from 'express'
import {adminLogin, allContacts,adminProfile} from '../controller/Admin_Controller.js'
import { allFeedbacks,allUsers,allShopOwners ,allShops} from '../controller/Admin_Controller.js'


const adminRouter=express.Router()

adminRouter.get("/allContacts",allContacts)
adminRouter.get("/allFeedbacks",allFeedbacks)
adminRouter.get("/allUsers",allUsers)
adminRouter.get("/allShopOwners",allShopOwners)
adminRouter.get("/allShops",allShops)

adminRouter.post("/adminLogin",adminLogin)
adminRouter.get("/adminProfile",adminProfile)

export default adminRouter




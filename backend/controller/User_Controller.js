import FeedBackModel from "../model/FeedBack_Model.js";
import mongoose from "mongoose"
import userModel from '../model/User_Model.js';
import ProductModel from '../model/ShopDetail.js'
import ShopDetailModel from "../model/ShopDetail.js";
import { uploadProfileImage } from "../utility/cloudinary.js";


export async function addFeedback(request, response) {


    const feedbackObject = request.body
    const { name, email, rating, remarks } = feedbackObject
    try {
        const userDoc = new FeedBackModel({ name, email, rating, remarks })
        await userDoc.save()
        console.log("feedback added");
        response.json({ "message": "The process has successfully completed" })
    }
    catch (error) {
        console.log(error);
        response.status(500).json({ "message": "Unable to process login" });
    }

}

export async function registration(request,response)
{
    try {
        const { email, password, name, phone, city, address } = request.body
        if (!request.file) {
            return response.status(400).json({ message: "Profile image is required", status: "error" })
        }

        const uploadedImage = await uploadProfileImage(request.file.buffer)
        const regDoc = new userModel({
            email, password, name, phone, city, address, pic: uploadedImage.secure_url
        })
        await regDoc.save()
        response.status(201).json({ message: "Registration Done", status: "success" })
    } catch (error) {
        console.error("User registration failed:", error)
        response.status(500).json({ message: "Unable to process registration", status: "error" })
    }

}


// user login code
export async function userLogin(request,response){
    const loginData=request.body
    const {email,password}=loginData
    try{const userDoc = await userModel.findOne({email:email,password:password})
        if(userDoc!=null){
 response.json({"message":"loginSuccessful","token":email,"status":"success"})
        }else{
            response.status(401).json({"message":"Invalid Credentials","status":"error"})
        }
       
    }
    catch (error) {

        console.log(error);
        response.status(500).json({ "message": "Unable to process login", "status": "error" });
    }

}

//user profile function

export async function profile(request,response){
    const email=request.query.email
    console.log(`email of user is ${email}`);
    try{
        const userDoc=await userModel.findOne({email:email})
        response.json({"profileData":userDoc})
    }
    catch(error){
        console.log(error);
        
    }
    
}


export async function viewShops(request,response)  //viewDetails
{

    try{
    //    const productDoc=await ProductModel.find()
    //    response.json("objectDta",productDoc)

    const productDoc=await ProductModel.find().populate('owner', 'name phone city').exec()
    response.json({"objectData":productDoc})

    }
    catch(error){
        console.log(error);
        
    }
    
}
     
// for search shop on map
export async function searchShops(request,response) {
try{
    const shopDoc=await ShopDetailModel.find()
    
    if(shopDoc!=null){

    response.json({"data":shopDoc})
    }
}
catch(error){
    console.log(error);
    
}

    
}
//<---------- user edit profile--------->

export const editProfile=async(request,response)=>{

    const newData=request.body
    const email=request.query.email
try{
    const {name,phone,city,address}=newData
    const filterCondition={email:email}
    const modifiedData={ $set:
        {

        name:name,
        phone:phone,
        city:city,
        address:address
    }
    
    }

   const status= await userModel.updateOne(filterCondition,modifiedData)
console.log(`status is ${status}`);

    response.json({"updateStatus":status})

}
catch(error){
    console.log(error);
    
}

}
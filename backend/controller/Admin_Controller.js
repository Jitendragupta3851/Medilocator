import AdminModel from "../model/Admin_Model.js";
import mongoose from "mongoose";
import ContactModel from "../model/Contact_Model.js";
import FeedBackModel from "../model/FeedBack_Model.js";
import userModel from "../model/User_Model.js";
import ShopOwnerModel from "../model/ShopOwner_Model.js";
import ShopDetailModel  from "../model/ShopDetail.js"


//admin login code
export async function adminLogin(request,response)
{
    const loginData=request.body
    const {email,password}=loginData
    try{
       const adminDoc=await AdminModel.findOne({email:email,password:password})
if(adminDoc!=null)
{
response.json({"message":"Login Successful","token":email,"status":"success"})
}
else{
response.json({"message":"Invalid Credentials"})
}

    }
    catch(error){
        console.log(error);
        
    }




}
//admin profile function
export async function adminProfile(request,response){
    const email=request.query.email
    console.log(`email of user is ${email}`);
    try{
        const userDoc=await AdminModel.findOne({email:email})
        response.json({"profileData":userDoc})
    }
    catch(error){
        console.log(error);
        
    }
    
}

  // <-----All Contacts--->
export async function allContacts(request,response)
{
    try{
       const contactDocs= await ContactModel.find() //select * from contact
       console.log(`all contacts ${contactDocs}`);
       response.json({"contactDetails":contactDocs})
       

    }
    catch(error){
        console.log(error);
        
    }
}

  // <-----All Feedbacks--->

export async function allFeedbacks(request,response)
{
    try{
       const feedbackDocs= await FeedBackModel.find() //select * from contact
       console.log(`all contacts ${feedbackDocs}`);
       response.json({"feedbackDetails":feedbackDocs})
       

    }
    catch(error){
        console.log(error);
        
    }
}


  // <-----All Users--->

export async function allUsers(request,response)
{
    try{
       const userDocs= await userModel.find() //select * from contact
       console.log(`all users ${userDocs}`);
       response.json({"userDetails":userDocs})
       

    }
    catch(error){
        console.log(error);
        
    }
}


  // <-----All ShopOwnerers--->

export async function allShopOwners(request,response)
{
    try{
       const shopOwnerDocs= await ShopOwnerModel.find() //select * from contact
       console.log(`all shopOwners ${shopOwnerDocs}`);
       response.json({"shopOwnerDetails":shopOwnerDocs})
       

    }
    catch(error){
        console.log(error);
        
    }
}


  // <-----All Shops--->

export async function allShops(request,response)
{
    try{
       const shopDocs= await ShopDetailModel.find() //select * from contact
       console.log(`all shops ${shopDocs}`);
       response.json({"shopDetails":shopDocs})
       

    }
    catch(error){
        console.log(error);
        
    }
}



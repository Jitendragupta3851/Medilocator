import FeedBackModel from "../model/FeedBack_Model.js";
import mongoose from "mongoose"
import userModel from '../model/User_Model.js';
import ProductModel from '../model/ShopDetail.js'
import ShopDetailModel from "../model/ShopDetail.js";


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

    }

}

export async function registration(request,response)
{
    const registrationData=request.body
    const {email,password,name,phone,city,address}=registrationData
    const pic=request.file.filename
console.log(`pic name is ${pic}`);

try{
    const regDoc=new userModel({email,password,name,phone,city,address,pic})
    await regDoc.save()
    response.json({"message":"Registration Done"})

}
catch(error){
    console.log(error);
    
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
            response.json({"message":"Invalid Credentials"})
        }
       
    }
    catch (error) {

        console.log(error);

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
import mongoose from "mongoose";
import ShopOwnerModel from "../model/ShopOwner_Model.js";
import ShopDetailModel from "../model/ShopDetail.js";
import { request, response } from "express";



export async function viewShops(request,response)  //viewDetails
{


    const id = request.query.id;
    console.log("idxcvbnm",id);
    
    try{
    //    const productDoc=await ProductModel.find()
    //    response.json("objectDta",productDoc)

    const productDoc=await ShopDetailModel.find({owner:id}).populate('owner', 'name phone city').exec()
    response.json({"objectData":productDoc})

    }
    catch(error){
        console.log(error);
        
    }
    
}
        

export async function registration(request,response)
{
    const registrationData=request.body
    const {email,password,name,phone,city,address}=registrationData
    const pic=request.file.filename

    console.log(`picname is ${pic}`);
    
    try{
        const regDoc=new ShopOwnerModel({email,password,name,phone,city,address,pic})
        await regDoc.save()

        
    response.json({"message":"Registration Done"})

    }
    catch(error){
        console.log(error);
        
    }
    
}

// shop owner login code
export async function shopLogin(request,response){
    const loginData=request.body
    const {email,password}=loginData
    try{const userDoc = await ShopOwnerModel.findOne({email:email,password:password})
        if(userDoc!=null){
             response.json({"message":"loginSuccessful","token":email,"status":"success","_id":userDoc._id})
        }else{
            response.json({"message":"Invalid Credentials"})
        }
       
    }
    catch (error) {

        console.log(error);

    }

}

//shop owner profile function

export async function profile(request,response){
    const email=request.query.email
    console.log(`email of user is ${email}`);
    try{
        const userDoc=await ShopOwnerModel.findOne({email:email})
        response.json({"profileData":userDoc})
    }
    catch(error){
        console.log(error);
        
    }
    
}

export async function myProduct(request,response)
{
    try{
    const email=request.query.email
   const productDoc=await ProductModel.find({email:email})
   response.json({"objectData":productDoc})
    }
    catch(error){
        console.log(error);
        
    }
}

// add shop
export async function addShop(request,response)
{
    const shopData=request.body
    const {owner,shopName,description,phone,city,address}=shopData
   

try{
    const regDoc=new ShopDetailModel({owner,shopName,description,phone,city,address})
       regDoc.save()
    response.json({"message":"Registration Done"})

}
catch(error){
    console.log(error);
    
}}


//---- update(edit) shop owner profile---

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

   const status= await ShopOwnerModel.updateOne(filterCondition,modifiedData)
console.log(`status is ${status}`);

    response.json({"updateStatus":status})

}
catch(error){
    console.log(error);
    
}

}


export async function updateLocation(request,response){
   const locationData=request.body
   const shopId=request.query.id
   const{longitude,latitude}=locationData
   
   console.log(longitude);
   console.log(latitude);
   console.log(shopId);
   const filterCondition={_id:shopId}
   const modifiedData={$set: {locationLat:latitude , locationLong:longitude}}
   const status= await ShopDetailModel.updateOne(filterCondition,modifiedData)
   console.log(`status is updated ${status}`);
   
   
   
  try {
   // const locDoc=new ShopDetailModel({long})


     response.json({"updateStatus":status} )
   
    
  } catch (error) {
    console.log(error);
    
  }
}



import mongoose from 'mongoose'

const shopOwnerSchema= new mongoose.Schema({
        email: {type:String,required:true},  //unique:true
        password:{type:String,required:true,length:45},
        name: {type:String,required:true,length:50},
        phone:{type:String,required:true,length:13} ,
        city:{type:String,required:true,length:50} ,
        address: {type:String,required:true,length:100},
        pic:{type:String,required:false,length:250},
        date:{type:Date,default:Date.now}


})
const ShopOwnerModel=mongoose.model("ShopOwner",shopOwnerSchema)
export default ShopOwnerModel
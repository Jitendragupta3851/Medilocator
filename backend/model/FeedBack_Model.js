import mongoose from "mongoose";

const FeedBackSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        rating: { type: Number, required: true, min: 1, max: 5 },
        remarks:{type:String,required:true,default:""},
        date:{type:Date,default:Date.now}
        


})
const FeedBackModel=mongoose.model("FeedBack",FeedBackSchema)
export default FeedBackModel
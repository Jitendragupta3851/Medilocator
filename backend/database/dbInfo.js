import mongoose from 'mongoose'


export const dbConnect=async()=>{
     try{
        //  const connection= await mongoose.connect(DBURL)
         const connection= await mongoose.connect(process.env.MONGO_URI)
         console.log(`database connection established successfully`);
         
     }
     catch(error){
        console.log(error);
        
     }


}
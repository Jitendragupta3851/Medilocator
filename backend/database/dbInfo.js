import mongoose from 'mongoose'

const DBURL=`mongodb+srv://jitendra:jitendra123@mycluster.cagwl7b.mongodb.net/project_db`

export const dbConnect=async()=>{
     try{
         const connection= await mongoose.connect(DBURL)
         console.log(`database connection established successfully`);
         
     }
     catch(error){
        console.log(error);
        
     }


}
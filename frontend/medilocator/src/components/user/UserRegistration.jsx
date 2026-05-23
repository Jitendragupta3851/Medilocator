import Footer from "../Footer"
import Header from "../Header"
import '../../css/userRegistration.css'
import { useState,useRef } from "react"
import axios from "axios"

function UserRegistration() {
    const fileInputRef=useRef(null)

    const [regData,setRegData]=useState({
        email:"",
        password:"",
        name:"",
        phone:"",
        city:"",
        address:""
    })
    const [pic,setPic]=useState(null)
const URL="http://localhost:3000/user/register"
    const fetchData=(e)=>{
        const{name,value,type,files}=e.target; //destructure

        if (type === "file"){
            console.log(files[0]);
            setPic(files[0]); 
            
        }
        else{
            setRegData({...regData,[name]:value})
        }

    }// fetch data close

    const submitData=async(e)=>
    {
        e.preventDefault()
        alert("in submit")
        console.log(pic);
// setting all data in format of object
        const formData= new FormData();
        for (const key in regData )
        {
            formData.append(key,regData[key]); // to set all value from object
        }

        if(pic){
            formData.append("pic",pic)    //key and value
        }

        for(let [key,value] of formData.entries())
        {
            console.log(`${key}:`,value);
            
        }
        try{
 
        const serverResponse=await axios.post(URL,formData)
        console.log(serverResponse.data.message);
        alert("submit")
        setRegData({email:"",password:"",name:"",phone:"",city:"",address:""})
        setPic("null")
        fileInputRef.current.value=null; //it is used to clear file field
        

        }
        catch(error){
            console.log(error);
            
        }
        
    }



    return (
        <>
                     <Header />

            <div className="login-form">
                <form  onSubmit={submitData}>
                    <h3 className="text-info text-center  ">User Registration</h3>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                        <input type="email" name="email" className="form-control" placeholder="Enter Your email" onChange={fetchData} value={regData.email}  required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i className='fas fa-key'></i></span>
                        <input type="password" name="password" className="form-control" placeholder="Enter Your password" onChange={fetchData} value={regData.password} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                        <input type="name" name="name" className="form-control" placeholder="Enter Your name" onChange={fetchData} value={regData.name} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-phone"></i></span>
                        <input type="phone" name="phone" className="form-control" placeholder="Enter Your phone" onChange={fetchData} value={regData.phone} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-city"></i></span>
                        <input type="city" name="city" className="form-control" placeholder="Enter Your city" onChange={fetchData} value={regData.city} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-file-image"></i></span>
                        <input type="file" name="pic" className="form-control" onChange={fetchData} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-location-dot"></i></span>
                        <input type="address" name="address" className="form-control" placeholder="Enter Your address" onChange={fetchData} value={regData.address} required/>
                    </div>

                    <div className="btn-group mt-3">

                        <div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
            <Footer />
        </>
    )
}
export default UserRegistration
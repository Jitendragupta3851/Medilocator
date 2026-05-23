import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

function AdminLogin() {
    const Navigate=useNavigate()
    const [loginData, setLoginData] = useState({
            email: "",
            password: "",

        })
const URL = "http://localhost:3000/admin/adminLogin"
    const fetchData = (e) => {
        setLoginData({ ...loginData,[e.target.name]:e.target.value })
    }
    const submitData = async (e) => {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, loginData)
            console.log(serverResponse);
            const msg = serverResponse.data.status
            if (msg === "success") {
                //alert("login Successful")
                localStorage.setItem("emailKey", serverResponse.data.token)
                Navigate("/adminHome")

            }
            else {
                alert("Invalid credentials")
                
            }

        }
        catch(error){
            console.log(error);

        }
    }
    return (
        <>
        <Header/>
<div className="login-form">
                        <form  onSubmit={submitData}>
<h3 className="mb-4">Admin Login</h3>
            <div className="input-group mb-3 w-70 ">
                <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                <input type="email" name="email" className="form-control" placeholder="Enter Your email" onChange={fetchData} value={loginData.email} required/>
            </div>

            <div className="input-group mb-3 w-70 ">
                <span className="input-group-text"><i className='fas fa-key'></i></span>
                <input type="password" name="password" className="form-control" placeholder="Enter Your password" onChange={fetchData} value={loginData.password} required/>
            </div>

            <div className="btn-group mt-3"></div>
            <div>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
</form>
</div>
<Footer/>
        </>
    )
}
export default AdminLogin
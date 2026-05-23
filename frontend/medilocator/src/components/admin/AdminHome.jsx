import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'

function AdminHome() {
    const URL = "http://localhost:3000/admin/adminProfile"
    const navigate = useNavigate()
    const [profile, setProfile] = useState({ name: "",email:"",password:"", phone: "" })
    const emailId = localStorage.getItem("emailKey")

    const fetchData = async () => {
        if (emailId === null) {
            navigate("/adminLogin")
        }
        else {
            try {
                const params = { "email": emailId }
                const serverResponse = await axios.get(URL, { params })
                console.log(serverResponse.data.profileData);
                setProfile(serverResponse.data.profileData)//to set value in profile object
                localStorage.setItem("admin", JSON.stringify(serverResponse.data.profileData));//to set value  in profile object
            }
            catch (error) {
                console.log(error);

            }
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <AdminHeader />
            {/* <h1>Welcome Admin <br />{emailId}</h1> */}
            
            <div className="card" style={{ width: "40%", marginLeft: "auto", marginRight: "auto", textAlign: "center", marginTop: "50px" }}>
                <div className="card-body">
                    <h1 className="card-title">Welcome Admin <br />{emailId}</h1>
                    <h3>Name:{profile.name}</h3>
                    <h3>Phone:{profile.phone}</h3>
                </div>
            </div>
        </>
    )
}
export default AdminHome
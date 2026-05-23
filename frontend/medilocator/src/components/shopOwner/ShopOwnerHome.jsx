import axios from 'axios'
import { useState, useEffect } from 'react'
import ShopOwnerHeader from '../shopOwner/ShopOwnerHeader'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'

function ShopOwnerHome() {
    const URL = "http://localhost:3000/shopOwner/shopOwnerProfile"
    const navigate = useNavigate()
    const [profile, setProfile] = useState({ name: "", city: "", address: "", phone: "", pic: "" })
    const emailId = localStorage.getItem("emailKey")

    const fetchData = async () => {
        if (emailId === null) {   
            navigate("/shopLogin")
        }
        else {
            try {
                const params = { "email": emailId }
                const serverResponse = await axios.get(URL, { params })
                console.log(serverResponse.data.profileData);
                setProfile(serverResponse.data.profileData)//to set value in profile object
                localStorage.setItem("user", JSON.stringify(serverResponse.data.profileData));//to set value  in profile object
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
            <ShopOwnerHeader />
            {/* <h1>Welcome Shop Owner <br />{emailId}</h1> */}
            
            <div className="card" style={{ width: "40%", marginLeft: "auto", marginRight: "auto", textAlign: "center", marginTop: "50px" }}>
                <img src={`http://localhost:3000/profilePics/${profile.pic}`} className="card-img-top " alt="..." style={{ width: "50%", height: "150px", marginLeft: "auto", marginRight: "auto" }} />
                <div className="card-body">
                    <h1 className="card-title">Welcome ShopOwner <br /> {emailId}</h1>
                    <h3>Name:{profile.name}</h3>
                    <h3>Phone:{profile.phone}</h3>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}
export default ShopOwnerHome
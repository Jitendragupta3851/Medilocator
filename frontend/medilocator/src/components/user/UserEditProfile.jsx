// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import UserHeader from '../user/UserHeader'

// function UserEditProfile() {

// const storedData=JSON.parse(localStorage.getItem("user"))

//     const URL = "http://localhost:3000/user/editProfile"
//     const navigate = useNavigate()
//     const [oldData, setOldData] = useState({
//          name:storedData.name,
//          city:storedData.city,
//           address:storedData.address,
//            phone:storedData.phone})
//     const emailId = localStorage.getItem("emailKey")

//     const getData=(e)=>{
//         setOldData({...oldData,[e.target.name]:e.target.value})
//     }

//     const submitData=async(e)=>{
//         e.preventDefault()
//          try {
//                 const params = { "email": emailId }
//                 const serverResponse = await axios.put(URL,oldData, { params })
               
// console.log(serverResponse);
// const serverMsg=serverResponse.data.updateStatus.acknowledged
// console.log(serverMsg);
// if(serverMsg === true)
//    // alert("profile update successfully")

// navigate("/userHome")




//             }
//             catch (error) {
//                 console.log(error);

//             }

//     }

   
   
//     return (
//         <>
//             <UserHeader/>
//             <h1>Edit Your Profile<br />{emailId}</h1>
           
//             <div className="card" style={{ width: "40%",height:"20%", marginLeft: "auto", marginRight: "auto", textAlign: "center", marginTop: "50px" }}>
//                <form  onSubmit={submitData}>
//                 {/* <img src={`http://localhost:3000/profilePics/${oldData.pic}`} className="card-img-top " alt="..." style={{ width: "50%", height: "150px", marginLeft: "auto", marginRight: "auto" }} /> */}
                 
//                 <div className="card-body">
//                     <h1 className="card-title">Welcome user {emailId}</h1>
//                     <h2>Name:<input className='form-control' type="text" name="name" value={oldData.name} onChange={getData} required /> </h2>
//                     <h2>Phone:<input className='form-control' type="text" name="phone" value={oldData.phone} onChange={getData}  required/> </h2>
                    
//                     <h2>City:<input className='form-control' type="text" name="city" value={oldData.city} onChange={getData}  required/> </h2>
//                     <h2>Address<textarea  className='form-control' type="text" name="address" value={oldData.address} onChange={getData}  required /> </h2>

// <button className='btn btn-danger'> Edit Profile</button>         
//        </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default UserEditProfile


import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../user/UserHeader'
import Footer from '../Footer'

function UserEditProfile() {
  const storedData = JSON.parse(localStorage.getItem("user"))

  const URL = "http://localhost:3000/user/editProfile"
  const navigate = useNavigate()
  const [oldData, setOldData] = useState({
    name: storedData.name,
    city: storedData.city,
    address: storedData.address,
    phone: storedData.phone
  })
  const emailId = localStorage.getItem("emailKey")

  const getData = (e) => {
    setOldData({ ...oldData, [e.target.name]: e.target.value })
  }

  const submitData = async (e) => {
    e.preventDefault()
    try {
      const params = { email: emailId }
      const serverResponse = await axios.put(URL, oldData, { params })
      const serverMsg = serverResponse.data.updateStatus.acknowledged
      if (serverMsg === true) {
        navigate("/userHome")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <UserHeader />
      <h3 style={{ textAlign: "center", marginTop: "5vh", fontWeight: "bold", color: "#0d6efd" }}>
        Edit Your Profile
      </h3>

      <div
        className="card shadow-lg"
        style={{ width: "45%", margin: "50px auto", borderRadius: "12px" }}
      >
        <form onSubmit={submitData} style={{ padding: "25px" }}>
          <div className="card-body">
            <h5 style={{ marginBottom: "25px", color: "#333", fontWeight: "600" }}>
              Welcome User <span style={{ color: "#0d6efd" }}>{emailId}</span>
            </h5>

            {/* Name */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ fontWeight: "500" }}>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={oldData.name}
                onChange={getData}
                required
                style={{ marginTop: "5px" }}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ fontWeight: "500" }}>Phone</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={oldData.phone}
                onChange={getData}
                required
                style={{ marginTop: "5px" }}
              />
            </div>

            {/* City */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ fontWeight: "500" }}>City</label>
              <input
                className="form-control"
                type="text"
                name="city"
                value={oldData.city}
                onChange={getData}
                required
                style={{ marginTop: "5px" }}
              />
            </div>

            {/* Address */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ fontWeight: "500" }}>Address</label>
              <textarea
                className="form-control"
                name="address"
                value={oldData.address}
                onChange={getData}
                required
                style={{ marginTop: "5px", resize: "none", minHeight: "80px" }}
              />
            </div>

            {/* Submit Button */}
            <button
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "10px",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default UserEditProfile

import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function UserHeader() {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("emailKey")
        localStorage.removeItem("user")
        toast.success("Logged out successfully!")

        navigate("/userLogin")



    }
  
   


    return (
    <>
        <nav className="navbar navbar-dark  fixed-top"  style={{backgroundColor:"#a1e9e9ff"}} >
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand mx-auto" to="/"><i className="fa-solid fa-house-user"></i> MediLocator</Link>
    </div>
</nav>


<div className="offcanvas offcanvas-start" style={{backgroundColor:"#a7afff",width:"20%",marginTop:"50px"}} tab-index="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome, User!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div className="offcanvas-body">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-black" to="/userHome"><i className="fas fa-house-door"></i> Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/userEditProfile"><i className="fas fa-user-edit"></i> Edit Profile</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/feedback"><i className="fas fa-comments"></i> Add Feedback</Link>
            </li>
           <li className="nav-item">
                <Link className="nav-link text-black" to="/viewShops"><i className="fa-solid fa-shop"></i> View Shops</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/shopMap"><i className="fa-solid fa-location-dot"></i> View shop on Map</Link>
            </li>
            
            
            
            <li className="nav-item">
            <button type="button" className="btn btn-light" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i>
                 Logout
            </button>
            </li>
        </ul>
    </div>
</div>
</>
    
     ) }
      


export default UserHeader

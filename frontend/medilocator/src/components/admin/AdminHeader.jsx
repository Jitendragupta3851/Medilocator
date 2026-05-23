import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminHeader() {
    const navigate=useNavigate()
        const logout=()=>{
            localStorage.removeItem("emailKey")
            localStorage.removeItem("admin")
            toast.success("Logged out successfully!")
    
            navigate("/adminLogin")
    
    
    

        }
   


    return (
    <>
        <nav className="navbar navbar-dark  fixed-top"  style={{backgroundColor:"#a7afff"}} >
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
            <span className="navbar-toggler-icon"></span> 
        </button>
        <Link className="navbar-brand mx-auto" to="/"><i className="fa-solid fa-house-user"></i> MediLocator</Link>
    </div>
</nav>


<div className="offcanvas offcanvas-start" style={{backgroundColor:"#a7afff",width:"20%",marginTop:"50px"}} tab-index="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome, Admin!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div className="offcanvas-body">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-black" to="/adminHome"><i className="bi bi-house-door"></i> 
                Home</Link>
            </li>
                
            <li className="nav-item">
                <Link className="nav-link text-black" to="/allFeedbacks"><i className="fas fa-comment-dots"></i> All Feedbacks</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/allContacts"><i className="fas fa-address-book"></i> All Contacts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/allUsers"><i className="fas fa-user"></i> All Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/allShopOwners"><i className="fa-solid fa-house-user"></i> All ShopOwners</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/allShops"><i className="fa-solid fa-shop"></i> All Shops</Link>
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
      


export default AdminHeader

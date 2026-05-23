import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import FeedBack from "./components/user/FeedBack"
import AllContacts from "./components/admin/AllContacts"
import UserRegistration from "./components/user/UserRegistration"
import ShopOwnerRegistration from "./components/shopOwner/ShopOwnerRegistration"
import AllFeedbacks from "./components/admin/AllFeedbacks"
import AdminLogin from "./components/admin/AdminLogin"
import UserLogin from "./components/user/UserLogin"
import ShopLogin from "./components/shopOwner/ShopLogin"

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ShopOwnerHome from "./components/shopOwner/ShopOwnerHome"
import UserHome from "./components/user/UserHome"
import AddShopDetail from "./components/shopOwner/AddShopDetail"
import ShopOwnerEditProfile from "./components/shopOwner/ShopOwnerEditProfile"
import ViewShops from "./components/user/ViewShops"
import ShopOwnerViewShops from "./components/shopOwner/ShopOwnerViewShops"
import AddLocation from "./components/shopOwner/AddLocation"
import SearchShopsOnMap from "./components/user/SearchShopsOnMap"
import AdminHome from './components/admin/AdminHome'
import UserEditProfile from "./components/user/UserEditProfile"
import AllUsers from "./components/admin/AllUsers"
import AllShopOwners from "./components/admin/AllShopOwners"
import AllShops from "./components/admin/AllShops"


function PathMapper()
{
    return(
        <>
        <ToastContainer/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="aboutus" element={<AboutUs/>}></Route>
            <Route path="contactus" element={<ContactUs/>}></Route> 
            <Route path="feedback" element={<FeedBack/>}></Route> 
            <Route path="/allContacts" element={<AllContacts/>}></Route> 
            <Route path="/allFeedbacks" element={<AllFeedbacks/>}></Route> 
            <Route path="/allUsers" element={<AllUsers/>}></Route> 
            <Route path="/allShopOwners" element={<AllShopOwners/>}></Route> 
            <Route path="/allShops" element={<AllShops/>}></Route> 

            <Route path="/userRegistration" element={<UserRegistration/>}></Route>  
            <Route path="/shopowner" element={<ShopOwnerRegistration/>}></Route> 
            <Route path="/adminLogin" element={<AdminLogin/>}></Route> 
            <Route path="/userLogin" element={<UserLogin/>}></Route> 
            <Route path="/shopLogin" element={<ShopLogin/>}></Route>
            <Route path="/shopOwnerHome" element={<ShopOwnerHome/>}></Route>
            <Route path="/userHome" element={<UserHome/>}></Route>
            <Route path="/viewShops" element={<ViewShops/>}></Route>
            <Route path="/addshop" element={<AddShopDetail/>}></Route>
            <Route path="/shopOwnerEditProfile" element={<ShopOwnerEditProfile/>}></Route>
            
            <Route path="/userEditProfile" element={<UserEditProfile/>}></Route>

            <Route path="/ShopOwnerViewShops" element={<ShopOwnerViewShops/>}/>
            <Route path="/addLocation" element={<AddLocation/>}></Route>
            <Route path="/shopMap" element={<SearchShopsOnMap/>}></Route>
            <Route path="/adminHome" element={<AdminHome/>}></Route>




            
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default PathMapper
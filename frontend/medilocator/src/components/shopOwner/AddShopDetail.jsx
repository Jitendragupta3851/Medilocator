import Footer from "../Footer"

import axios from "axios"
import { useState } from "react"
import ShopOwnerHeader from "./ShopOwnerHeader";

function AddShopDetail() {
      const owner=  JSON.parse(localStorage.getItem("user"));//to set value  in profile object
       // console.log("owner id is",owner._id);
        
    const [regShop, setRegShop] = useState({
        owner:owner._id,
        shopName: "",
        description: "",
        phone: "",
        city: "",
        address: ""
    })
    const URL = "http://localhost:3000/shopOwner/addShop"
    const fetchData = (e) => {
       setRegShop({...regShop,[e.target.name]:e.target.value})
       console.log(regShop);
       

    }// fetch data close

    const submitData = async (e) => {
        e.preventDefault()
        alert("in submit")
       
        // setting all data in format of object
        

        
        try {
            const serverResponse = await axios.post(URL,regShop)
            console.log(serverResponse.data.message);
            alert(serverResponse.data.message)
            setRegShop(    
                {
                    shopName: "",
                    description: "",
                    phone: "",
                    city: "",
                    address: ""
                }
            )
            


        }
        catch (error) {
            console.log(error);

        }

    }

    return (
        <>
            
          <ShopOwnerHeader/>
            <div className="login-form">
                <form action="" onSubmit={submitData}>
                    <h3 className="text-black text-center" >Add shop Details</h3>


                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i className='fas fa-user'></i></span>
                        <input type="text" name="shopName" className="form-control" placeholder="Enter Your shopname" onChange={fetchData} value={regShop.shopName} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i class="fa-solid fa-keyboard"></i></span>
                        <textarea type="text" name="description" className="form-control" placeholder="Enter Your description" onChange={fetchData} value={regShop.name}></textarea>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-phone"></i></span>
                        <input type="text" name="phone" className="form-control" placeholder="Enter Your phone" onChange={fetchData} value={regShop.phone} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-city"></i></span>
                        <input type="text" name="city" className="form-control" placeholder="Enter Your city" onChange={fetchData} value={regShop.city} required />
                    </div>

                    

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-location-dot"></i></span>
                        <input type="text" name="address" className="form-control" placeholder="Enter Your address" onChange={fetchData} value={regShop.address} required />
                    </div>

                    <div className="btn-group mt-3">
                        {/* <button type="reset" className="btn btn-warning">Reset</button> */}

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
export default AddShopDetail
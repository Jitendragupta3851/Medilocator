import Footer from "../Footer"
import Header from "../Header"
import axios from "axios"

import { useState } from "react"

function ShopOwnerRegistration() {
    const [regShop, setRegShop] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        city: "",
        address: ""
    })
    const [pic, setPic] = useState(null)
    const URL = "http://localhost:3000/shopOwner/register"
    const fetchData = (e) => {
        const { name, value, type, files } = e.target; //destructure

        if (type === "file") {
            console.log(files[0]);
            setPic(files[0]);

        }
        else {
            setRegShop({ ...regShop, [name]: value })
        }

    }// fetch data close

    const submitData = async (e) => {
        e.preventDefault()
        alert("in submit")
        console.log(pic);
        // setting all data in format of object
        const formData = new FormData();
        for (const key in regShop) {
            formData.append(key, regShop[key]); // to set all value from object
        }

        if (pic) {
            formData.append("pic", pic)    //key and value
        }

        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);

        }
        try {
            

            const serverResponse = await axios.post(URL, formData)
            console.log(serverResponse.data.message);
            alert(serverResponse.data.message)
            setRegShop(    
                {
                    email: "",
                    password: "",
                    name: "",
                    phone: "",
                    city: "",
                    address: ""
                }
            )
            setPic(null)


        }
        catch (error) {
            console.log(error);

        }

    }

    return (
        <>
            <Header />

            <div className="login-form">
                <form action="" onSubmit={submitData}>
                    <h3 className="text-info text-center  ">Shop Owner Registration</h3>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                        <input type="email" name="email" className="form-control" placeholder="Enter Your email" onChange={fetchData} value={regShop.email} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i className='fas fa-key'></i></span>
                        <input type="password" name="password" className="form-control" placeholder="Enter Your password" onChange={fetchData} value={regShop.password} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                        <input type="name" name="name" className="form-control" placeholder="Enter Your name" onChange={fetchData} value={regShop.name} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-phone"></i></span>
                        <input type="phone" name="phone" className="form-control" placeholder="Enter Your phone" onChange={fetchData} value={regShop.phone} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-city"></i></span>
                        <input type="city" name="city" className="form-control" placeholder="Enter Your city" onChange={fetchData} value={regShop.city} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fas fa-file-image"></i></span>
                        <input type="file" name="pic" className="form-control" onChange={fetchData} required/>
                    </div>

                    <div className="input-group mb-3 w-70 ">
                        <span className="input-group-text"> <i className="fa-solid fa-location-dot"></i></span>
                        <input type="address" name="address" className="form-control" placeholder="Enter Your address" onChange={fetchData} value={regShop.address} required/>
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
export default ShopOwnerRegistration
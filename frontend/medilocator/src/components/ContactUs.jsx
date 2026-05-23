import '../css/contactus.css'
import Footer from "../components/Footer.jsx"
import Header from './Header.jsx'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function ContactUs() {
    const [contact, setContact] = useState({ name: "", email: "", phone: "", question: "" })

    const URL = "http://localhost:3000/addContact"
    function fetchData(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
        console.log(contact);

    }
    async function submitData(e) {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, contact)
            console.log(serverResponse);
            Swal.fire({                             //by sweetalert2.com & npm install sweetalert2
                title: "Contact Details✔✔",
                text: serverResponse.data.message,
                icon: "success"    //for ✔ correct
            });
            // Swal.fire({
            //     title: "Contact Details are successfully submitted",
            //     icon: "success",
            //     draggable: true
            // });
            setContact({ name: "", email: "", phone: "", question: "" }) //after submit ,empty all fields



        }
        catch (error) {
            console.log(error);

        }
    }




    return (
        <>
            <Header />
            {/* <div className="d-flex1">
                <div><i className="fas fa-phone"></i> 6394778988</div>
                <div><i className="fas fa-envelope"></i> medilocator@gmail.com</div>
            </div> */}

            <div>
                {/* <h2>We are Here to help you </h2> */}
                <h2 className="help-text">We are Here to help you</h2>

            </div>
            <div className="flex1">
                <div className="image1">
                    <img src="contact2.jpg" alt="img" />

                </div>
                <div className='login-form' >
                    <form onSubmit={submitData} >
                        <div className='input-group mb-3 w-70' >

                            <span className="input-group-text"> <i className="fas fa-user"></i></span>
                            <input type="Name"
                                name="name" className="form-control" id="name" placeholder="Enter Your Name" onChange={fetchData} value={contact.name} required />


                        </div >
                        
                        <div className='input-group mb-3 w-70'>
                            <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                            <input type="email"
                                name="email" className="form-control" id="emailId" placeholder="Enter Your email" onChange={fetchData} value={contact.email} required />

                        </div>
                        
                        <div className='input-group mb-3 w-70'>
                            <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                            <input type="Phone"
                                name="phone" className="form-control" id="phone" placeholder="Enter Your Phone no. " onChange={fetchData} value={contact.phone} required />
                        </div>
                        
                        <div className='input-group mb-3 w-70'>
                            <input type="text"
                                name="question"
                                className="form-control" id="text" placeholder="Question " onChange={fetchData} value={contact.question} required />
                        </div>
                        
                        <div>
                            <button type='submit' className='btn1'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default ContactUs
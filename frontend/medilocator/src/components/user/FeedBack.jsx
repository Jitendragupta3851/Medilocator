import '../../css/feedback.css'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Footer from '../Footer'
import UserHeader from '../user/UserHeader'

function FeedBack() {
    const email=localStorage.getItem("emailKey")
    const user=JSON.parse(localStorage.getItem("user"))
     const [feedback, setFeedback] = useState({ name: "", email: "", rating: "", remarks: "" })

    const URL = "http://localhost:3000/user/addFeedback"
    function fetchData(e) {
        setFeedback({ ...feedback, [e.target.name]: e.target.value })
        console.log(feedback);

    }
    async function submitData(e) {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, feedback)
            console.log(serverResponse);
            Swal.fire({                             //by sweetalert2.com & npm install sweetalert2
                title: "Feedback submitted✔✔",
                text: serverResponse.data.message,
                icon: "success"    //for ✔ correct tick
            });
          
            setFeedback({ name: "", email: "", rating: "", remarks: "" }) //after submit ,empty all fields



        }
        catch (error) {
            console.log(error);

        }
    }








    return (
        <>
        <UserHeader/>
        <form  onSubmit={submitData} >
        <div className="form-element">
            <h3>Feedback Form</h3>
            
                <label htmlFor="name">Name:-</label>
                <input className="inputbox" type="text" name="name" placeholder="Enter your name"
                onChange={fetchData} value={feedback.name} required />
                <br />
                <br />

                <label htmlFor="email">Email:-</label>
                <input className="inputbox" type="email" name="email" placeholder="Enter your email"
                onChange={fetchData} value={feedback.email} required />
                <br />
                <br />

                <label htmlFor="rating">Rating:-</label>
                <input className="inputbox"  type="number" name="rating" placeholder="Enter your rating (1 - 5)"
                onChange={fetchData} value={feedback.rating} required />
                <br />
                <br />

                <label htmlFor="remarks">Remarks:-</label>
                <input className="inputbox"  type="text" name="remarks" placeholder="Enter your remarks"
                onChange={fetchData} value={feedback.remarks} required />
                <br />
                <br />
                <div>
                    <button type='submit' className='btn1'>Submit</button>
                </div>

                
</div>

            </form>
           <Footer/> 
        </>
    )
}


export default FeedBack
import axios from "axios"
import { useState,useEffect } from "react"
import ContactDetails from "./ContactDetails"
import AdminHeader from "./AdminHeader"

function AllContacts()
{
    const [contact,setContact]=useState([])
    const URL="http://localhost:3000/admin/allContacts"  //api
    const fetchData=async()=>
    {
        try{
            const serverResponse=await axios.get(URL)
            console.log(serverResponse);
            setContact(serverResponse.data.contactDetails)   
            

        }
        catch(error){
            console.log(error);
            
        }

    }
    // useEffect calling

    useEffect(()=>{
        fetchData()

    },[])


    return(
        <>
        {/* <h2>contacts details</h2>

        <ContactDetails contactArray={contact}/> */}


          <AdminHeader/>
              <div className="container" style={{ marginTop: "40px" }}>
        <div className="card shadow-lg border-0">
          <div
            className="card-header text-center"
            style={{
              background: "linear-gradient(90deg, #198754, #20c997)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Contact Details
          </div>
          <div className="card-body" style={{ padding: "30px" }}>
            {contact.length > 0 ? (
              <ContactDetails contactArray={contact} />
            ) : (
              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                No contact requests available.
              </p>
            )}
          </div>
        </div>
      </div>

        </>
    )
}
export default AllContacts
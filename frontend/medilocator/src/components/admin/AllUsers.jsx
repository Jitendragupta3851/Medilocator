import axios from "axios"
import { useState, useEffect } from "react"
import UserDetails from "./UserDetails"
import AdminHeader from "./AdminHeader"


function AllUsers() {
    const [user, setUser] = useState([])
    const URL = "http://localhost:3000/admin/allUsers"  //api
    const fetchData = async () => {
        try {
            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setUser(serverResponse.data.userDetails)


        }
        catch (error) {
            console.log(error);

        }

    }
    // useEffect calling

    useEffect(() => {
        fetchData()

    }, [])


    return (
        // <>
        // <AdminHeader/>
        // <h2>Users details</h2>

        // <UserDetails UserArray={user}/>
        // </>
        <>
            <AdminHeader />
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="card shadow-lg border-0">
                    <div
                        className="card-header text-center"
                        style={{
                            background: "linear-gradient(90deg, #0d6efd, #25d366)",
                            color: "#fff",
                            fontWeight: "600",
                            fontSize: "20px",
                        }}
                    >
                        User Details
                    </div>
                    <div className="card-body" style={{ padding: "30px" }}>
                        {user.length > 0 ? (
                            <UserDetails userArray={user} />
                        ) : (
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#666",
                                    fontStyle: "italic",
                                }}
                            >
                                No user available yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}
export default AllUsers
import axios from "axios"
import { useState, useEffect } from "react"
import AdminHeader from "./AdminHeader"
import ShopOwnerDetails from "./ShopOwnerDetails"


function AllShopOwners() {
    const [shopOwner, setShopOwner] = useState([])
    const URL = "http://localhost:3000/admin/allShopOwners"  //api
    const fetchData = async () => {
        try {
            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setShopOwner(serverResponse.data.shopOwnerDetails)


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
                        Shop Owner Details
                    </div>
                    <div className="card-body" style={{ padding: "30px" }}>
                        {shopOwner.length > 0 ? (
                            <ShopOwnerDetails shopOwnerArray={shopOwner} />
                        ) : (
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#666",
                                    fontStyle: "italic",
                                }}
                            >
                                No shopOwner available yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}
export default AllShopOwners
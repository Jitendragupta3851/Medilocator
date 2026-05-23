import axios from "axios"
import { useState, useEffect } from "react"
import ShopDetails from "./ShopDetails"
import AdminHeader from "./AdminHeader"


function AllShops() {
    const [shop, setShop] = useState([])
    const URL = "http://localhost:3000/admin/allShops"  //api
    const fetchData = async () => {
        try {
            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setShop(serverResponse.data.shopDetails)


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
                        Shop Details
                    </div>
                    <div className="card-body" style={{ padding: "30px" }}>
                        {shop.length > 0 ? (
                            <ShopDetails shopArray={shop} />
                        ) : (
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#666",
                                    fontStyle: "italic",
                                }}
                            >
                                No shop available yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}
export default AllShops
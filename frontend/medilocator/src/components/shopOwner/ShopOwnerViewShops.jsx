import ShopOwnerHeader from "./ShopOwnerHeader"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function ShopOwnerViewShops() {
    const Id=localStorage.getItem("_id")
    const URL = "http://localhost:3000/shopOwner/viewShops"
    const [product, setProduct] = useState([])

    const fetchData = async () => {
        try {
           const params={"id":Id}
            const serverResponse = await axios.get(URL,{params})
            console.log(serverResponse);

            const serverData = serverResponse.data.objectData
            console.log(serverData);


            setProduct(serverData)

        }
        catch (error) {
            console.log(error);

        }
    }// fetch data close 
    useEffect(() => {
        fetchData()

    }, [])

//     return (
//         <>
//             <ShopOwnerHeader />
//             <h1>view Shops</h1>
//             <div className="flex-container">

//                 {

//                     product.map((p) => {
//                         return (
//                             <div className="item-div" key={p._id}>
//                                 <img src={`http://localhost:3000/productPics/${p.productPic}`} alt="" />
//                                 <h6>Shop Name:{p.shopName}</h6>
//                                 <h6>Description:{p.description}</h6>
//                                 <h6>Phone No.:{p.phone}</h6>
//                                 <h6>City:{p.city}</h6>
//                                 <h6>Address:{p.address}</h6>


// <Link to="/addLocation" state={{productinfo:p._id}} ><button>Add Location</button></Link> 
 
//                             </div>

//                         )

//                     })
//                 }

//             </div>
//         </>
//     )
// }
// export default ShopOwnerViewShops


return (
    <>
      <ShopOwnerHeader />
      <div className="container mt-5">
        <h3 className="text-center mb-4">View Shop</h3>

        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle shadow-sm">
            <thead className="table-dark text-center">
              <tr>
                {/* <th>Image</th> */}
                <th>Shop Name</th>
                <th>Description</th>
                <th>Phone</th>
                <th>City</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {product.length > 0 ? (
                product.map((p) => (
                  <tr key={p._id}>
                     {/*<td>
                      <img
                        src={`http://localhost:3000/productPics/${p.productPic}`}
                        alt="Shop"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      /> 
                    </td>*/}
                    <td>{p.shopName}</td>
                    <td>{p.description}</td>
                    <td>{p.phone}</td>
                    <td>{p.city}</td>
                    <td>{p.address}</td>
                    <td>
                      <Link
                        to="/addLocation"
                        state={{ productinfo: p._id }}
                        className="btn btn-sm btn-primary"
                      >
                        Add Location
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-muted">
                    No shops available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ShopOwnerViewShops
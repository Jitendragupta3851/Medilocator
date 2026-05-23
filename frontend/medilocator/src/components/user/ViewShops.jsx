import UserHeader from "./UserHeader"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function ViewShops() {
    // const emailId=localStorage.getItem("emailKey")
    const URL = "http://localhost:3000/user/viewShops"
    const [product, setProduct] = useState([])

    const fetchData = async () => {
        try {
        //    const params={"email":emailId}
            const serverResponse = await axios.get(URL)
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
//             <UserHeader />
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

//                                 {/* <a href={`https://wa.me/+916394778988?text=`}> Talk with shop</a> */}
//                                 <a 
//   href={`https://wa.me/+91${p.phone}?text=Hello%20${p.shopName},%20I%20am%20interested%20in%20your%20shop.`} 
//   target="_blank" 
//   rel="noopener noreferrer"
// >
//   Talk with shop
// </a>


 
//                             </div>

//                         )

//                     })
//                 }

//             </div>
//         </>
//     )
// }
// export default ViewShops


return (
    <>
      <UserHeader />
      <div className="container mt-4">
        <h3 className="text-center mb-4">Available Shops</h3>
        <div className="row">
          {product.length > 0 ? (
            product.map((p) => (
              <div className="col-md-4 mb-4" key={p._id}>
                <div className="card shadow-sm h-100">
                  {/* <img
                    src={`http://localhost:3000/productPics/${p.productPic}`}
                    className="card-img-top"
                    alt={p.shopName}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">{p.shopName}</h5>
                    <p className="card-text">{p.description}</p>
                    <p><strong>Phone:</strong> {p.phone}</p>
                    <p><strong>City:</strong> {p.city}</p>
                    <p><strong>Address:</strong> {p.address}</p>
                  </div>
                  <div className="card-footer text-center bg-white">
                    <a
                      href={`https://wa.me/+91${p.phone}?text=Hello%20${p.shopName},%20I%20am%20interested%20in%20your%20shop.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success "
                    >
                      <i className="fa-brands fa-whatsapp"></i> Chat with Shop
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No shops available right now.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ViewShops
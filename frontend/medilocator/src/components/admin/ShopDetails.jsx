function ShopDetails({shopArray})
{
    return(
        <>
        <table className="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th>Shop Name</th>
                    <th>Description</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Address</th>

                </tr>
            </thead>

            <tbody>
               {
                shopArray.map((shop)=>{
                    return(
                        <tr key={shop._id }>
                            <td>{shop.shopName}</td>
                            <td>{shop.description}</td>
                            <td>{shop.phone}</td>
                            <td>{shop.city}</td>
                            <td>{shop.address}</td> 
                           
                        </tr>
                    ) 

                })
               }
            </tbody>
        </table> 

        </>
    )
}
export default ShopDetails
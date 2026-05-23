function ShopOwnerDetails({shopOwnerArray})
{
    return(
        <>
        <table className="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Address</th>

                </tr>
            </thead>

            <tbody>
               {
                shopOwnerArray.map((shopOwner)=>{
                    return(
                        <tr key={shopOwner._id }>
                            <td>{shopOwner.name}</td>
                            <td>{shopOwner.email}</td>
                            <td>{shopOwner.phone}</td>
                            <td>{shopOwner.city}</td>
                            <td>{shopOwner.address}</td> 
                           
                        </tr>
                    ) 

                })
               }
            </tbody>
        </table> 

        </>
    )
}
export default ShopOwnerDetails
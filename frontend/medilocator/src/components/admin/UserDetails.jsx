function UserDetails({userArray})
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
                userArray.map((user)=>{
                    return(
                        <tr key={user._id || user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.city}</td>
                            <td>{user.address}</td> 
                           
                        </tr>
                    ) 

                })
               }
            </tbody>
        </table> 

        </>
    )
}
export default UserDetails
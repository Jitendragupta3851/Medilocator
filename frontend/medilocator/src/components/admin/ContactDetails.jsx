function ContactDetails({contactArray})
{
    return(
        <>
        <table className="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Question</th>
                </tr>
            </thead>

            <tbody>
               {
                contactArray.map((contact)=>{
                    return(
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.question}</td>
                           
                        </tr>
                    ) 

                })
               }
            </tbody>
        </table> 

        </>
    )
}
export default ContactDetails
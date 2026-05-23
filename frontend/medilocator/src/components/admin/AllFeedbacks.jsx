import axios from "axios"
import { useState, useEffect } from "react"
import FeedbackDetails from "./FeedbackDetails"
import AdminHeader from "./AdminHeader"


function AllFeedbacks() {
    const [feedback, setFeedback] = useState([])
    const URL = "http://localhost:3000/admin/allFeedbacks"  //api
    const fetchData = async () => {
        try {
            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setFeedback(serverResponse.data.feedbackDetails)


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
        // <h2>feedbacks details</h2>

        // <FeedbackDetails feedbackArray={feedback}/>
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
                        Feedback Details
                    </div>
                    <div className="card-body" style={{ padding: "30px" }}>
                        {feedback.length > 0 ? (
                            <FeedbackDetails feedbackArray={feedback} />
                        ) : (
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#666",
                                    fontStyle: "italic",
                                }}
                            >
                                No feedback available yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}
export default AllFeedbacks
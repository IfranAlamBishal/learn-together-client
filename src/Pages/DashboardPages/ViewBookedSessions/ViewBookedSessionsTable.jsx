import { Link } from "react-router-dom";
import useApprovedSessions from "../../../Hooks/useApprovedSessions";

const ViewBookedSessionsTable = ({ session }) => {

    const { session_id, } = session;

    const approvedSessions = useApprovedSessions();
    const sessionData = approvedSessions.find(data => data._id == session_id);

   
    // console.log(session, sessionData);


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (sessionData) {
        const { title, tutor_name, class_start, class_end } = sessionData;
        return (
            <tr>
                <th>{title}</th>
                <td>{tutor_name}</td>
                <td>{class_start} - {class_end}</td>
                <td><Link to={`/details/${session_id}`} onClick={scrollUp} className="btn btn-neutral text-xs">View Details</Link></td>
            </tr>
        );
    }
    else {
        return <div className="flex justify-center">
            <span className="loading loading-infinity w-24"></span>
        </div>
    }
};

export default ViewBookedSessionsTable;
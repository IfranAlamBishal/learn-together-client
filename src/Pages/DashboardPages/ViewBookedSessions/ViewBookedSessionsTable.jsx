import { Link } from "react-router-dom";

const ViewBookedSessionsTable = ({ session }) => {
    console.log(session)
    const {session_id, } = session;
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <tr>
            <th>Title</th>
            <td>Tutor</td>
            <td>class Time: </td>
            <td><Link to={`/details/${session_id}`} onClick={scrollUp} className="btn btn-neutral text-xs">View Details</Link></td>
        </tr>
    );
};

export default ViewBookedSessionsTable;
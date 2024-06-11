
const ViewBookedSessionsTable = ({session}) => {
    console.log(session)
    // const {title, } = session;
    return (
        <tr>
            <th>Title</th>
            <td>Tutor</td>
            <td>class Time: </td>
            <td><button>View Details</button></td>
        </tr>
    );
};

export default ViewBookedSessionsTable;
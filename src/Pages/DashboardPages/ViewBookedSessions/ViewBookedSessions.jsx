import { Helmet } from "react-helmet-async";
import useBookedSessionData from "../../../Hooks/useBookedSessionData";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import ViewBookedSessionsTable from "./ViewBookedSessionsTable";


const ViewBookedSessions = () => {


    const allBookedSessions = useBookedSessionData();
    const bookedSessions = allBookedSessions.data;
    console.log(allBookedSessions)

    if (allBookedSessions.length < 0) {
        return (
            <div className=" my-10">
                <Helmet>
                    <title>Learn Together | Booked Sessions</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Your Booked Sessions'
                        description='Keep track of your upcoming sessions, all conveniently listed for your reference.'>
                    </SectionHeader>
                </div>

                <div>
                    <h2 className=" text-4xl font-semibold text-center">No notes found</h2>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className=" my-10">
                <Helmet>
                    <title>Learn Together | Booked Sessions</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Your Booked Sessions'
                        description='Keep track of your upcoming sessions, all conveniently listed for your reference.'>
                    </SectionHeader>
                </div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>tutor</th>
                                    <th>Class Time</th>
                                    <th className=" opacity-0">details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBookedSessions.map(session => <ViewBookedSessionsTable key={session._id} session={session}></ViewBookedSessionsTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default ViewBookedSessions;
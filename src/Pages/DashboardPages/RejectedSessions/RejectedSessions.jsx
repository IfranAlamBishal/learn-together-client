import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useRejectedSessions from "../../../Hooks/useRejectedSessions";

const RejectedSessions = () => {

    const [rejectedSessions] = useRejectedSessions();
    return (
        <div className=" my-10 w-5/6 mx-auto">
            <Helmet>
                <title>Learn Together | Rejected Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Rejected Sessions'
                    description=''>
                </SectionHeader>
            </div>

            <h2 className=" text-3xl font-bold mb-4">Total Sessions : {rejectedSessions.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr className=" bg-gray-500 text-white text-base">
                                <th></th>
                                <th>Title</th>
                                <th>Tutor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rejectedSessions.map((session, index) => <tr key={session._id}>
                                    <th>{index + 1}</th>
                                    <td>{session.title}</td>
                                    <td>{session.tutor_name}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RejectedSessions;
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useApprovedSessions from "../../../Hooks/useApprovedSessions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ApprovedSessions = () => {

    const [approvedSessions , refetch] = useApprovedSessions();
    const axiosSecure = useAxios();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete_approvedSession/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch;
                            Swal.fire({
                                title: "Deleted!",
                                text: "You've successfully deleted the session.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    
    return (
        <div className=" my-10 w-5/6 mx-auto">
            <Helmet>
                <title>Learn Together | Approved Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Approved Sessions'
                    description=''>
                </SectionHeader>
            </div>

            <h2 className=" text-3xl font-bold mb-4">Total Users : {approvedSessions.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className=" bg-gray-500 text-white text-base">
                                <th></th>
                                <th>Title</th>
                                <th>Tutor</th>
                                <th className=" opacity-0">Update</th>
                                <th className=" opacity-0">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                approvedSessions.map((session, index) => <tr key={session._id}>
                                    <th>{index + 1}</th>
                                    <td>{session.title}</td>
                                    <td>{session.tutor_name}</td>
                                    <td><Link className="btn btn-neutral text-xs">Update</Link></td>
                                    <td><Link onClick={() => handleDelete(session._id)} className="btn btn-neutral text-xs">Delete</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApprovedSessions;
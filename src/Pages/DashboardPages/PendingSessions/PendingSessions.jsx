import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import usePendingSessions from "../../../Hooks/usePendingSessions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

const PendingSessions = () => {

    const [pendingSessions, refetch] = usePendingSessions();
    const axiosSecure = useAxios();

    const handleApprove = session => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to approve this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const id = session._id;
                axiosSecure.delete(`/delete_pendingSession/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            const approvedSession = {
                                title: session.title,
                                tutor_name: session.tutor_name,
                                rating: session.rating,
                                description: session.description,
                                registration_open: session.registration_open,
                                registration_close: session.registration_close,
                                class_start: session.class_start,
                                class_end: session.class_end,
                                duration: session.duration,
                                fees: session.fees,
                                status: "approved"
                            }
                            axiosSecure.post('/add_approvedSession', approvedSession)
                                .then(() => {
                                    refetch();
                                    Swal.fire({
                                        title: "Approved!",
                                        text: "You've successfully approved the session.",
                                        icon: "success"
                                    });
                                })
                        }
                    })
            }
        });
    }

    const handleReject = session => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to reject this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const id = session._id;
                axiosSecure.delete(`/delete_pendingSession/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            const rejectedSession = {
                                title: session.title,
                                tutor_name: session.tutor_name,
                                rating: session.rating,
                                description: session.description,
                                registration_open: session.registration_open,
                                registration_close: session.registration_close,
                                class_start: session.class_start,
                                class_end: session.class_end,
                                duration: session.duration,
                                fees: session.fees,
                                status: "rejected"
                            }
                            axiosSecure.post('/add_rejectedSession', rejectedSession)
                                .then(() => {
                                    refetch();
                                    Swal.fire({
                                        title: "Rejected!",
                                        text: "You've successfully rejected the session.",
                                        icon: "success"
                                    });
                                })
                        }
                    })
            }
        });
    }


    return (
        <div className=" my-10 w-5/6 mx-auto">
            <Helmet>
                <title>Learn Together | Pending Sessions</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Pending Sessions'
                    description=''>
                </SectionHeader>
            </div>

            <h2 className=" text-3xl font-bold mb-4">Total Sessions : {pendingSessions.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr className=" bg-gray-500 text-white text-base">
                                <th></th>
                                <th>Title</th>
                                <th>Tutor</th>
                                <th className=" ">Approve</th>
                                <th className="">Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pendingSessions.map((session, index) => <tr key={session._id}>
                                    <th>{index + 1}</th>
                                    <td>{session.title}</td>
                                    <td>{session.tutor_name}</td>
                                    <td><Link onClick={() => handleApprove(session)} className="btn btn-neutral rounded-full "><IoMdCheckmarkCircle /></Link></td>
                                    <td><Link onClick={() => handleReject(session)} className="btn btn-neutral rounded-full"><FaCircleXmark /></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingSessions;
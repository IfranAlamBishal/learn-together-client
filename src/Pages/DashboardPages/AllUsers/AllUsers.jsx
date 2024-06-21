import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useUserData from "../../../Hooks/useUserData";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const AllUsers = () => {

    const allUsers = useUserData();
    const axiosSecure = useAxios();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove him/her!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete_user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "You've successfully removed the user.",
                                icon: "success"
                            });
                            window.location.reload();
                        }
                    })

            }
        });
    }
    return (
        <div className=" w-5/6 mx-auto my-10">
            <Helmet>
                <title>Learn Together | All Users</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='All Users'
                    description=''>
                </SectionHeader>
            </div>

            <h2 className=" text-3xl font-bold mb-4">Total Users : {allUsers.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className=" bg-gray-500 text-white text-base">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className=" opacity-0">Update</th>
                                <th className=" opacity-0">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><Link className="btn btn-neutral text-xs">Update</Link></td>
                                    <td><Link onClick={() => handleDelete(user._id)} className="btn btn-neutral text-xs">Remove</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
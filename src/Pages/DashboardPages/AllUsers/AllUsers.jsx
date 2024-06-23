import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useUserData from "../../../Hooks/useUserData";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useForm } from "react-hook-form";

const AllUsers = () => {

    const [users, refetch] = useUserData();
    const axiosSecure = useAxios();
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {

        const id = data.id;
        const role = data.role;
        axiosSecure.patch(`/user/admin/${id}`, role)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Updated!",
                        text: "You've successfully updated the user role.",
                        icon: "success"
                    });
                   
                }
            });
    }



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
                            refetch();
                            Swal.fire({
                                title: "Removed!",
                                text: "You've successfully removed the user.",
                                icon: "success"
                            });
                            
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

            <h2 className=" text-3xl font-bold mb-4">Total Users : {users.length}</h2>
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
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    {/* <td><Link className="btn btn-neutral text-xs">Update</Link></td> */}
                                    <td>
                                        <button className="btn btn-neutral text-xs" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>

                                        {/* Update Role Modal */}
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <div>
                                                    <form method="dialog">
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                </div>

                                                <div className="modal-action justify-start">
                                                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                                        <div>
                                                            <label className="label">
                                                                <span className="label-text">Select a role</span>
                                                            </label>
                                                            <select {...register("role")} className=" border rounded-lg p-1">
                                                                <option value="student">Student</option>
                                                                <option value="tutor">Tutor</option>
                                                                <option value="tutor">Admin</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <input type="text" className=" hidden"  {...register("id")} value={user._id} />
                                                        </div>
                                                        <div className="form-control">
                                                            <button type="submit" className="btn btn-neutral text-xs mt-10 mb-4 " value=''>Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
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
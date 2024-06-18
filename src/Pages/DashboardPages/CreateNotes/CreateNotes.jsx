
import { useContext } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CreateNotes = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxios();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);

        Swal.fire({
            title: "Are you sure?",
            text: "You want to save this note?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, save it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const note = {
                    student_email: user.email,
                    title: data.title,
                    description: data.description

                }
                console.log(note)
                axiosSecure.post('/add_notes', note)
                    .then(() => {
                        Swal.fire({
                            title: "Saved!",
                            text: "You;ve successfully booked this session.",
                            icon: "success"
                        });
                        navigate('/dashboard/manage_notes')
                    })

            }
        });
    }

    return (
        <div className=" my-10">
            <Helmet>
                <title>Learn Together | Create Note</title>
            </Helmet>
            <div className=" mb-10">
                <SectionHeader
                    title='Create Note'
                    description=''>
                </SectionHeader>
            </div >

            <div className=" card bg-gray-400 text-white shadow-xl p-5">
                <h2 className=" text-xl font-semibold p-8"><span className=" text-2xl font-bold mr-2">Your email:</span>  {user.email}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title")} placeholder="title" className="input input-bordered bg-white text-black" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" {...register("description")} placeholder="description" className="textarea textarea-bordered textarea-lg w-full bg-white text-black" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-neutral w-20" value='Save'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNotes;
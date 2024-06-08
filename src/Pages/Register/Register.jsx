import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useUserData from "../../Hooks/useUserData";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateName, updatePhoto, googleLogIn, gitLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxios();
    const [users] = useUserData();

    const onSubmit = data => {

        const alreadyUser = users.filter(user => user.email == data.email)
        console.log(alreadyUser);

        if (alreadyUser.length == 0) {
            createUser(data.email, data.password)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Registered !",
                        text: "You have successfully registered!",
                    });
                    updateName(data.name);
                    updatePhoto(data.photo);


                    const user = {
                        name: data.name,
                        email: data.email,
                        role: data.role
                    }

                    axiosSecure.post('/createUser', user)
                        .then(res => {
                            console.log(res.data)
                        })
                    navigate('/');
                })

                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops !",
                        text: error.massage,
                    });
                })

        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops !",
                text: "This email is associated with an existing account. Please use another email.",
            });
        }


    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const alreadyUser = users.filter(user => user.email == result.user.email)
                if (alreadyUser.length == 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Registered !",
                        text: "You have successfully registered!",
                    });

                    const user = {
                        name: result.user.displayName,
                        email: result.user.email,
                        role: 'student'
                    }
                    axiosSecure.post('/createUser', user)
                        .then(res => {
                            console.log(res.data)
                        })
                }
                else {
                    Swal.fire({
                        icon: "success",
                        title: "Logged in!",
                        text: "You have successfully logged in!",
                    });
                }
                navigate('/');
            })
    }

    const handleGitHubLogIn = () => {
        gitLogIn()
            .then(result => {
                const alreadyUser = users.filter(user => user.email == result.user.email)
                if (alreadyUser.length == 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Registered !",
                        text: "You have successfully registered!",
                    });

                    const user = {
                        name: result.user.displayName,
                        email: result.user.email,
                        role: 'student'
                    }
                    axiosSecure.post('/createUser', user)
                        .then(res => {
                            console.log(res.data)
                        })
                }
                else {
                    Swal.fire({
                        icon: "success",
                        title: "Logged in!",
                        text: "You have successfully logged in!",
                    });
                }
                navigate('/');
            })
    }


    return (
        <div>
            <Helmet>
                <title>Learn Together | Registration</title>
            </Helmet>
            <div className="hero min-h-screen bg-gray-500  pt-36 pb-14">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Step into a realm of knowledge, your gateway to personalized learning experiences.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white text-black">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile picture</span>
                                </label>
                                <input type="url" {...register("photo")} placeholder="photo" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select {...register("role")} className=" border rounded-lg p-1">
                                    <option value="student">Student</option>
                                    <option value="tutor">Tutor</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                })} placeholder="password" className="input input-bordered bg-white text-black" required />
                                {errors.password && <span className=" text-xs text-red-600 mt-1">Password must have at least 6 characters including at least a upper case(A-Z) and a lower case(a-z) letter.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-neutral" value='Register'></input>
                            </div>
                        </form>
                        <div className=" px-8  mb-8 space-y-8">
                            <button onClick={handleGoogleLogIn} className="btn btn-neutral w-full">Google</button>
                            <button onClick={handleGitHubLogIn} className="btn btn-neutral w-full">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
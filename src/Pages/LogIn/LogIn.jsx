import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import useAxios from "../../Hooks/useAxios";

const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, googleLogIn, gitLogIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [users] = useUserData();

    const from = location.state?.from?.pathname || '/';

    const forgotPassword = () => {
        Swal.fire({
            icon: "error",
            title: "Not available!",
            text: "This feature is not available yet!",
        });
    }


    const onSubmit = data => {
        console.log(data)

        logIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged in!",
                    text: "You have successfully logged in!",
                });
                navigate(from, { replace: true });
            })

            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops !",
                    text: error.massage,
                });
            })

    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const alreadyUser = users.filter(user => user.email == result.user.email)
                if (alreadyUser.length == 0) {
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
                Swal.fire({
                    icon: "success",
                    title: "Logged in!",
                    text: "You have successfully logged in!",
                });

                navigate(from, { replace: true });
            })
    }

    const handleGitHubLogIn = () => {
        gitLogIn()
            .then(result => {
                const alreadyUser = users.filter(user => user.email == result.user.email)
                if (alreadyUser.length == 0) {
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
                Swal.fire({
                    icon: "success",
                    title: "Logged in!",
                    text: "You have successfully logged in!",
                });

                navigate(from, { replace: true });
            })
    }


    return (
        <div>
            <Helmet>
                <title>Learn Together | Log in</title>
            </Helmet>
            <div className="hero min-h-screen bg-gray-500 pt-32 pb-14">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Unlock the door to your learning expedition, resume your journey.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white text-black">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                })} placeholder="password" className="input input-bordered bg-white text-black" required />
                                <div onClick={() => setShowPassword(!showPassword)} className=" text-lg text-blue-600 flex justify-end p-1">
                                    {
                                        showPassword ?
                                            <Link>Hide</Link>
                                            :
                                            <Link>Show</Link>
                                    }
                                </div>
                                {errors.password && <span className=" text-xs text-red-600 mt-1">Password must have at least 6 characters including at least a upper case(A-Z) and a lower case(a-z) letter.</span>}
                                <label className="label">
                                    <Link onClick={() => forgotPassword()} className="label-text-alt text-blue-600">Forgot password?</Link>
                                </label>
                                <p className=" text-base font-medium">New here ? <Link to="/Register" className=" text-blue-600">Register now</Link> and start your journey with us!</p>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-neutral" value='Login'></input>
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

export default LogIn;
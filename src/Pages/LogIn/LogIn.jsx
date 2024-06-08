import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, googleLogIn, gitLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


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
            .then(() => {
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
            .then(() => {
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
                                <input type="password" {...register("password", {
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                })} placeholder="password" className="input input-bordered bg-white text-black" required />
                                {errors.password && <span className=" text-xs text-red-600 mt-1">Password must have at least 6 characters including at least a upper case(A-Z) and a lower case(a-z) letter.</span>}
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
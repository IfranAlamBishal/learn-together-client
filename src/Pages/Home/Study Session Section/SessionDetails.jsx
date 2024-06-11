import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SessionDetails = () => {
    const details = useLoaderData();
    const { _id, title, tutor_name, description, registration_open, registration_close, class_start, class_end, duration, fees, rating, email } = details;
    console.log(details)
    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleBooking = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to book this session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, book it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const booking = {
                    student_email: user.email,
                    tutor_email: email,
                    session_id: _id

                }
                // console.log(booking)
                axiosSecure.post('/seassionBooking', booking)
                    .then(() => {
                        Swal.fire({
                            title: "Booked!",
                            text: "You;ve successfully booked this session.",
                            icon: "success"
                        });
                        navigate('/dashboard/booked_sessions')
                    })

            }
        });
    }

    return (
        <div className=" w-2/3 mx-auto pt-28">
            <div className="card shadow-xl image-full">
                <figure><img src="https://i.ibb.co/rMyjtVC/5481-jpg-860.jpg" alt="background" /></figure>
                <div className="card-body text-center text-white font-semibold">
                    <h2 className="card-title text-2xl md:text-4xl justify-center  mb-3">{title}</h2>
                    <p className=" font-medium text-lg mb-2">Tutor: {tutor_name}</p>
                    <p className=" text-xl mb-4">{description}</p>
                    <small className=" text-sm "> Sesssion Rating: {rating}</small>
                    <p className=" text-xl">Registration period: <span className=" text-lg">{registration_open} - {registration_close}</span></p>
                    <p className=" text-xl">Class Time: <span className=" text-lg">{class_start} - {class_end}</span></p>
                    <p className=" text-base">Duration: {duration}</p>
                    <p className=" text-2xl mb-4">Fees: {fees}</p>

                    <div className="card-actions justify-center mt-3">
                        <Link onClick={handleBooking} className="btn font-semibold">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;
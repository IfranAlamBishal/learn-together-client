import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";

const SessionDetails = () => {
    const details = useLoaderData();
    const { title, tutor_name, description, registration_open, registration_close, class_start, class_end, duration, fees, rating } = details;

    // const [details , setDetails] = useState([])
    // const axiosSecure = useAxios();
    // const id = useParams()

    // useEffect(() => {
    //     axiosSecure.get(`/details/${id}`)
    //         .then(res => {
    //             // console.log(res.data)
    //             setDetails(res.data)
    //         })
    // }, [axiosSecure])


    return (
        <div className=" w-2/3 mx-auto pt-28">
            <div className="card shadow-xl image-full">
                <figure><img src="https://i.ibb.co/rMyjtVC/5481-jpg-860.jpg" alt="background" /></figure>
                <div className="card-body text-center text-white">
                    <h2 className="card-title text-2xl md:text-4xl justify-center font-semibold mb-3">{title}</h2>
                    <p className=" font-medium text-lg mb-2">Tutor: {tutor_name}</p>
                    <p className=" text-xl font-semibold mb-4">{description}</p>
                    <p className=" text-xl font-semibold">Registration period: <span className=" text-lg">{registration_open} - {registration_close}</span></p>
                    <p className=" text-xl font-semibold">Class Time: <span className=" text-lg">{class_start} - {class_end}</span></p>
                    <p className=" text-base font-semibold">Duration: {duration}</p>
                    <p className=" text-2xl font-semibold mb-4">Fees: {fees}</p>

                    <div className="card-actions justify-center mt-3">
                        <Link className="btn font-semibold">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;
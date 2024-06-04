import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className=" w-5/6 mx-auto errorBg bg-opacity-50 text-center " >
            <div className=" pt-60 md:pt-40 lg:pt-32 bg-[#FFFFFF66] p-5 h-full">
                <h2 className=" text-4xl lg:text-6xl font-bold  mb-4"> Sorry, The page you are looking for is not available at the moment. </h2>
                <p className=" my-3"><i>{error.statusText || error.message}</i></p>
                <div>
                    <Link to='/' className=" btn btn-neutral font-semibold">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
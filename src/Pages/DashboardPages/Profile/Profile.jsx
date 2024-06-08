import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import useUserData from "../../../Hooks/useUserData";

const Profile = () => {

    const { user, loading } = useContext(AuthContext);
    const [users] = useUserData();
    
    if (loading) {
        return <div className="flex justify-center">
            <Helmet>
                <title>Learn Together | Profile</title>
            </Helmet>
            {
                <span className="loading loading-infinity w-24"></span>
            }
        </div>
    }
    if (user) {
        const { displayName, email, photoURL, metadata } = user;
        const currentUser = users.find(cUser => cUser.email == user.email)
        const role = currentUser.role
        return (
            <div>
                <Helmet>
                    <title>Learn Together | Profile</title>
                </Helmet>
                <div className=" w-5/6 mx-auto min-h-screen">
                    <div className="card bg-gray-400 text-white shadow-xl md:h-[600px] mt-14">
                        <figure className="px-10 pt-10 md:pt-20 ">
                            <img src={photoURL} alt="photo" className="rounded-full w-40 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl md:text-4xl font-bold">{displayName}</h2>
                            <p className=" text-lg font-semibold">{role}</p>
                            <p className=" text-lg font-semibold">{email}</p>
                            <p className=" text-lg font-semibold"> Joined: {metadata.creationTime}</p>
                            <div className="card-actions my-6">
                                <button className="btn btn-neutral">Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


};

export default Profile;
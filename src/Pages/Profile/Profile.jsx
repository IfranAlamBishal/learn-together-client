import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext);

    const {displayName, email, photoURL, metadata} = user;
    return (
        <div className=" w-2/3 mx-auto p-5">
            <div className="card bg-gray-400 text-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="photo" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <p>{metadata.creationTime}</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
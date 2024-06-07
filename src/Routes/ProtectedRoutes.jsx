import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity w-24"></span>
    }
    if (user) {
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
};

export default ProtectedRoutes;
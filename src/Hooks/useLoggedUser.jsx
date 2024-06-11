import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useLoggedUser = () => {

    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext)

    const { data: loggedUser=[] } = useQuery({
        queryKey: ['loggedUser', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user.email}`);
            return res.data;
        }
    })

    return loggedUser;
};

export default useLoggedUser;
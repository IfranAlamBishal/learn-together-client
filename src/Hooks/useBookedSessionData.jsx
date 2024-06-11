import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useBookedSessionData = () => {

    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext)

    const { data: bookedSessions=[] } = useQuery({
        queryKey: ['bookedSessions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedSessions?email=${user.email}`);
            return res.data;
        }
    })

    return bookedSessions;
};

export default useBookedSessionData;
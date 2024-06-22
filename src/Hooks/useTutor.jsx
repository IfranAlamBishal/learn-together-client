import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useTutor = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxios();
   
    const {data: isTutor} = useQuery({
        queryKey: [user?.email, 'isTutor'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/tutor/${user.email}`);
            return res.data?.tutor;
        }
    })
    return [isTutor];
};

export default useTutor;
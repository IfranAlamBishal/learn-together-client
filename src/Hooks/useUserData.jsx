import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUserData = () => {

    const axiosSecure = useAxios();

    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return [users,refetch];
};

export default useUserData;
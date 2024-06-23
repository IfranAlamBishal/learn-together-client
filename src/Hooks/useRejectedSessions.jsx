import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useRejectedSessions = () => {

    const axiosSecure = useAxios();

    const { refetch, data: rejectedSessions = [] } = useQuery({
        queryKey: ['rejectedSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/rejectedSessions')
            return res.data;
        }
    })
    return [rejectedSessions, refetch];
};

export default useRejectedSessions;
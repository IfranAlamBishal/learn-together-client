import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useApprovedSessions = () => {
    const axiosSecure = useAxios();

    const {refetch, data: approvedSessions=[] } = useQuery({
        queryKey: ['approvedSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/approvedSessions')
            return res.data;
        }
    })
    return [approvedSessions , refetch];
};

export default useApprovedSessions;
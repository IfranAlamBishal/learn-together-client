import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePendingSessions = () => {

    const axiosSecure = useAxios();

    const { refetch, data: pendingSessions = [] } = useQuery({
        queryKey: ['pendingSessions'],
        queryFn: async () => {
            const res = await axiosSecure.get('/pendingSessions')
            return res.data;
        }
    })
    return [pendingSessions, refetch];
};

export default usePendingSessions;
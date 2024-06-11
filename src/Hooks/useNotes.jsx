import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useNotes = () => {

    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext)

    const { data: notes=[]} = useQuery({
        queryKey: ['notes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/view_notes?email=${user.email}`)
            return res.data;
        }
    })
    return notes;
};

export default useNotes;
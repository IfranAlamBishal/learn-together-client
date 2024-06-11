import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'https://learn-together-server-five.vercel.app'
})
const useAxios = () => {

    return axiosSecure;
};

export default useAxios;
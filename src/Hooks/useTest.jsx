import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useTest = () => {

    return axiosSecure;
};

export default useTest;
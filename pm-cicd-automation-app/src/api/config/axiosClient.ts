import axios from 'axios';


const axiosClient = axios.create();

axiosClient.defaults.headers["Access-Control-Allow-Origin"] = "*";

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;

import axios from "axios";
const BASE_URL = 'http://localhost:3500/user/resumes';
const axiosInstance= axios.create({baseURL:BASE_URL});

export function listCV(userId){
  return axiosInstance
    .get(`${BASE_URL}/${userId}`)
    .then(response => response.data)
    .catch((error) =>{
      console.log(error);
      return{
        error: true,
        name: error.response.data?.error?.name || "Error",
        message: error.response.data?.error || "Error",
      };
    });
}

export {axiosInstance};

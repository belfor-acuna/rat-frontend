import axios from "axios";
import {getToken, removeToken, setToken} from "./helpers"
const BASE_URL = 'http://localhost:3500/auth';
const axiosInstance= axios.create({baseURL:BASE_URL});

const token = getToken();
if(token){
	setToken(token);
}

export function getMe() {
	return axiosInstance
		.get(`${BASE_URL}/me`)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
			if (error.response.status === 404) {
				removeToken();
			}
			return {
				error: true,
				name: error.response.data?.error?.name || "Error",
				message: error.response.data?.error || "Error",
			};
		});
}

export function register({ email, password, username}) {
	return axiosInstance
		.post(`${BASE_URL}/register`, { email, password, username})
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function login({ email, password }) {
	return axiosInstance
		.post(`${BASE_URL}/login`, { email, password })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}




export {axiosInstance};
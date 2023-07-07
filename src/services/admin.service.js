import axios from "axios";
const BASE_URL = 'http://localhost:3500/admin';
const axiosInstance= axios.create({baseURL:BASE_URL});

export function getUsers({adminId}) {
	return axiosInstance
		.get(`${BASE_URL}/${adminId}/users`)
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
			if (error.response.status === 404) {
				console.log(error.message)
			}
			return {
				error: true,
				name: error.response.data?.error?.name || "Error",
				message: error.response.data?.error || "Error",
			};
		});
}

import axios from "axios";
const BASE_URL = 'http://localhost:3500/user/resumes';
const axiosInstance= axios.create({baseURL:BASE_URL});


export function createCv({ name,surname,id,email,
	address,
	languages,
	phone,
	education,
	proficiencies,
	linkedin,
	jobExperience,
	photo }) {
	return axiosInstance
		.post(`${BASE_URL}/edit/${id}`, {name,surname,email,
            address,
            languages,
            phone,
            education,
            proficiencies,
            linkedin,
            jobExperience,
            photo})
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

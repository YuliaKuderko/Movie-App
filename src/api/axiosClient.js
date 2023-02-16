import axios from "axios";
import { parse, stringify } from 'qs'
import { apiConfig } from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    encode: parse,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        serialize: (obj) => {
        const params = { ...obj, api_key: apiConfig.apiKey };
        return stringify(params)}
    }
})

axiosClient.interceptors.request.use(async (config) => config)
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error
})

export default axiosClient
import axios from "axios";

export const API_BASE_URL="http://localhost:8080";

const api=axios.create({
    baseURL:API_BASE_URL,
    header:{
        "Content-Type":"appliation/json"
    }
})


export default api;
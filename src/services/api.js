import axios from 'axios';

const api = axios.create({
    baseURL: "https://covid-api-service.herokuapp.com"
})

export default api;
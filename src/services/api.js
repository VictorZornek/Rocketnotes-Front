import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-2zjc.onrender.com"
});
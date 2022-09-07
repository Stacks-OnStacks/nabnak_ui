import axios from "axios";

export const nabnakClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});

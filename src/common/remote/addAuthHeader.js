import { nabnakClient } from "./nabnak-client";

export default function addAuthToken() {
    nabnakClient.defaults.headers.common.authorization = window.localStorage.getItem("token");
}

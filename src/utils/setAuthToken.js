import apiClient from "./client-api";

const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common["x-auth-token"] = token;
    } else {
        delete apiClient.defaults.headers.common["x-auth-token"];
    }
};

export default setAuthToken;

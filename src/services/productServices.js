import apiClient from "../utils/client-api";

export function getSuggestionsAPI(search) {
    return apiClient.get(`/products/suggestions?search=${search}`);
}

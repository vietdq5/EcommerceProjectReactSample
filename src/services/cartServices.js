import clientApi from "../utils/client-api";

export function addToCartAPI(id, quantity) {
    return clientApi.post(`/cart/${id}`, { quantity });
}

export async function getCartAPI() {
    return await clientApi.get("/cart");
}

export function removeFromCartAPI(id) {
    return clientApi.patch(`/cart/remove/${id}`);
}

export function increaseProductAPI(id) {
    return clientApi.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id) {
    return clientApi.patch(`/cart/decrease/${id}`);
}

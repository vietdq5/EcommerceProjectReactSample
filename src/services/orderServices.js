import clientApi from "../utils/client-api";

export function checkoutAPI() {
    return clientApi.post("/order/checkout");
}

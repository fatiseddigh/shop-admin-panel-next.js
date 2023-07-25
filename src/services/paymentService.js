import http from "./httpServices";

export function createPayment() {
  return http.post("/payment/create").then(({ data }) => data.data);
}

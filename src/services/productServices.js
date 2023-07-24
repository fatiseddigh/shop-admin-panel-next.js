import http from "./httpServices";

export function getProducts(qs) {
  return http.get(`/product/list?${qs}`).then(({ data }) => data.data);
}

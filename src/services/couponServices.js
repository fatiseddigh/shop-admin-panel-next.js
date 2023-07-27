import http from "./httpServices";

export function getAllCoupons() {
  return http.get("/admin/coupon/list").then(({ data }) => data.data);
}
export function deleteCoupon(id) {
  return http
    .delete(`/admin/coupon/remove/${id}`)
    .then(({ data }) => data.data);
}

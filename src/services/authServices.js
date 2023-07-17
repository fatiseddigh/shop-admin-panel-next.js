import http from "./httpServices";

export function getOTP(phoneNumber) {
  return http
    .post("/user/get-otp", { phoneNumber })
    .then(({ data }) => data.data);
}
export function checkOTP(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

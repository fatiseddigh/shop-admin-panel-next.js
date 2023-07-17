import http from "./httpServices";

export function getOTP(phoneNumber) {
  return http.post("/user/get-otp", { phoneNumber }).then((data) => data.data);
}

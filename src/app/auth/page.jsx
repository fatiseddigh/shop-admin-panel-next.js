"use client";
import { useState } from "react";
import SendOTOForm from "./SendOTOForm";
import http from "@/services/httpServices";

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = (e) => {
    e.preventDefault();
    try {
      const { data } = http.post("/user/get-otp", { phoneNumber });
      console.log(data);
    } catch (error) {
      console.log(error, "hhh");
    }
  };
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">
        <SendOTOForm
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={sendOTPHandler}
        />
      </div>
    </main>
  );
};

export default AuthPAge;

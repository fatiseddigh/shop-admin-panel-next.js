"use client";
import { useState } from "react";
import SendOTOForm from "./SendOTOForm";
import http from "@/services/httpServices";
import { toast } from "react-hot-toast";

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post("/user/get-otp", { phoneNumber });
      toast.success(data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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

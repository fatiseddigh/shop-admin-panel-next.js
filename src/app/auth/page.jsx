"use client";
import { useState } from "react";
import SendOTOForm from "./SendOTOForm";
import http from "@/services/httpServices";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "@/services/authServices";

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync(phoneNumber);
      toast.success(data.message);
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
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default AuthPAge;

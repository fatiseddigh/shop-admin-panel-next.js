"use client";
import { useState } from "react";
import SendOTOForm from "./SendOTOForm";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "@/services/authServices";
import CheckOTOForm from "./CheckOTPForm";

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTOForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOTPHandler}
            isLoading={isLoading}
          />
        );
      case 2:
        return <CheckOTOForm />;
      default:
        return null;
    }
  };
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync(phoneNumber);
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(2);
    }
  };
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">{renderStep()}</div>
    </main>
  );
};

export default AuthPAge;

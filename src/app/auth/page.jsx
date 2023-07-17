"use client";
import { useEffect, useState } from "react";
import SendOTOForm from "./SendOTOForm";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, getOTP } from "@/services/authServices";
import CheckOTOForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";

const RESEND_TIME = 90;

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState();
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();
  const {
    data: OTPResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOTP,
  } = useMutation({
    mutationFn: getOTP,
  });
  const { mutateAsync: mutateCheckOTP, isLoading: isCheckingOTP } = useMutation(
    {
      mutationFn: checkOTP,
    }
  );

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOTP(phoneNumber);
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(2);
    }
  };
  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateCheckOTP({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

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
        return (
          <CheckOTOForm
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOTPHandler}
            onBack={() => setStep((s) => s - 1)}
            time={time}
            onResendOTP={sendOTPHandler}
            OTPResponse={OTPResponse}
            isCheckingOTP={isCheckingOTP}
          />
        );
      default:
        return null;
    }
  };
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">{renderStep()}</div>
    </main>
  );
};

export default AuthPAge;

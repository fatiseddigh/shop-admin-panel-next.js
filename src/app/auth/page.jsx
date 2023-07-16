"use client";
import { useState } from "react";
import SendOTOForm from "./SendOTOForm";

const AuthPAge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">
        <SendOTOForm phoneNumber={phoneNumber} onChange={phoneNumberHandler} />
      </div>
    </main>
  );
};

export default AuthPAge;

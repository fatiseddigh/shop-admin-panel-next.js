"use client";
import TextField from "@/common/TextField";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CompleteProfile = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { data, isLoading, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, email });
      toast.success(message);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={submitForm}>
          <TextField
            label="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn--primary w-full"
          >
            {isLoading ? "LOADING ..." : "send"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CompleteProfile;

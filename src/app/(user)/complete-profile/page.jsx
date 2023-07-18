"use client";
import FormikTextField from "@/common/FormikTextField";
import TextField from "@/common/TextField";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

// initial value
const initialValues = {
  name: "",
  email: "",
};
//  validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Enter your name")
    .min(5, " Name must be 5 character"),
  email: Yup.string().required("Enter your email").email("Email not valid"),
});
const CompleteProfile = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { data, isLoading, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const submitForm = async (values) => {
    // e.preventDefault();
    try {
      const { message } = await mutateAsync(values);
      toast.success(message);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit: submitForm,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <main className="flex justify-center ">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <FormikTextField label="name" name="name" formik={formik} />
          <FormikTextField label="email" name="email" formik={formik} />
          <button
            disabled={!formik.isValid}
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

"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import PaymentTable from "./PaymentTable";

const Payment = () => {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loading />;
  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-800">Payment list</h1>
      <PaymentTable payments={payments} />
    </>
  );
};

export default Payment;

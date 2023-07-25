"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLoacalDate";
import Link from "next/link";
import PaymentTable from "./payment/PaymentTable";

const Profile = () => {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loading />;
  return (
    <>
      <h1>welcome {user.name}</h1>
      <p>
        <span>join Date : </span>
        <span>{toLocalDateString(user.createdAt)}</span>
        <div className="border rounded-xl p-4 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-bold"> last user orders</h2>
            <Link href="/profile/payment" className="text-primary-900">
              {" "}
              show all orders
            </Link>
          </div>
          <PaymentTable
            payments={payments
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0.3)}
          />
        </div>
      </p>
    </>
  );
};

export default Profile;

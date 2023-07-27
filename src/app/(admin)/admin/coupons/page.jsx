"use client";

import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import Loading from "@/common/Loading";
import { useGetCoupons } from "@/hooks/useCoupons";
import CouponTable from "./CouponTable";

function Page() {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5"> Discount codes</h1>
        <Link
          href="/admin/coupons/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <HiPlusCircle className="w-6 h-6" /> <span> add discount codes </span>
        </Link>
      </div>
      <CouponTable coupons={coupons} />
    </div>
  );
}
export default Page;

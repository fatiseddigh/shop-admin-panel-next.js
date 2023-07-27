"use client";

import CouponForm from "@/components/CouponForm";
import { useAddCoupon } from "@/hooks/useCoupons";
import { useGetProducts } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const { data } = useGetProducts();
  const { products } = data || {};
  const [type, setType] = useState("percent");
  const [productsId, setProductsId] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const { isLoading, mutateAsync } = useAddCoupon();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productsId.map((p) => p._id),
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <h1 className="mb-4 font-bold text-primary-900">
        add new discount coupon
      </h1>

      <CouponForm
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        type={type}
        setType={setType}
        formData={formData}
        onChangeSelect={setProductsId}
        onFormChange={handleChange}
        onSubmit={handleSubmit}
        options={products}
      />
    </>
  );
}

export default Page;

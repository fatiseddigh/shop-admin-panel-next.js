"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import CartItem from "./CartItem";

function Cart() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  if (isLoading) return <Loading />;

  if (!user || !data)
    return (
      <div className="container lg:max-w-screen-lg">
        <p className="font-bold mb-4">
          {" "}
          for seeing cart you should login first{" "}
        </p>
        <Link href="/auth" className="text-lg font-bold text-primary-900">
          go to login page
        </Link>
      </div>
    );

  if (!user.cart?.products || user.cart?.products.length === 0)
    return (
      <div>
        <p> empty!</p>
        <Link href="/products" className="text-lg font-bold text-primary-900">
          go to product page
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-3 space-y-5">
        {cart &&
          cart.productDetail.map((item) => {
            return <CartItem key={item._id} cartItem={item} />;
          })}
      </div>
      <div className="col-span-1">cart summary</div>
    </div>
  );
}
export default Cart;

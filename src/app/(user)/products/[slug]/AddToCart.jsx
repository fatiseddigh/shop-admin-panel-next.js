"use client";

import { useGetUser } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const AddToCart = ({ product }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useGetUser();
  const { user } = data || {};

  const { isLoading, mutateAsync } = useCart();

  const addToCartHandler = async () => {
    if (!user) {
      toast.error("you should login first.");
      router.push("/auth");
      return;
    }
    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  const isInCart = (user, product) => {
    if (!user) return false;

    return user.cart?.products.some((p) => p.productId === product._id);
  };
  return (
    <div>
      {isInCart(user, product) ? (
        <Link href="/cart">continue</Link>
      ) : (
        <button onClick={addToCartHandler} className="btn btn--primary">
          {isLoading ? "LOADING ..." : "add to cart"}
        </button>
      )}
    </div>
  );
};

export default AddToCart;

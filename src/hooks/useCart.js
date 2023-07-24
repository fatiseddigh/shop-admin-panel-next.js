import { addToCart, decrementFromCart } from "@/services/cartServices";
import { useMutation } from "@tanstack/react-query";

export const useCart = () => {
  return useMutation({ mutationFn: addToCart });
};

export const useDecrementFromCart = () => {
  return useMutation({ mutationFn: decrementFromCart });
};

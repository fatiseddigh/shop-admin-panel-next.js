import { addToCart } from "@/services/cartServices";
import { useMutation } from "@tanstack/react-query";

export const useCart = () => {
  return useMutation({ mutationFn: addToCart });
};

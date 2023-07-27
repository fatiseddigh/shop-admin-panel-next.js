import {
  addNewCoupon,
  deleteCoupon,
  getAllCoupons,
} from "@/services/couponServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useRemoveCoupon = () => useMutation({ mutationFn: deleteCoupon });
export const useAddCoupon = () => {
  return useMutation({ mutationFn: addNewCoupon });
};

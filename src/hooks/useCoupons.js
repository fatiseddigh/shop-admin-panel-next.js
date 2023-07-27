import {
  addNewCoupon,
  deleteCoupon,
  getAllCoupons,
  getOneCoupon,
  updateCoupon,
} from "@/services/couponServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetOneCoupon = (id) =>
  useQuery({
    queryKey: ["get-coupon", id],
    queryFn: () => getOneCoupon(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useRemoveCoupon = () => useMutation({ mutationFn: deleteCoupon });
export const useAddCoupon = () => {
  return useMutation({ mutationFn: addNewCoupon });
};
export const useUpdateCoupon = () => useMutation({ mutationFn: updateCoupon });

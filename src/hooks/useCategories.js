import {
  addNewCategory,
  getCategories,
  getCategoryById,
} from "@/services/categoryServices";
import { useMutation, useQuery } from "@tanstack/react-query";
export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useAddCategory = () => {
  return useMutation({ mutationFn: addNewCategory });
};

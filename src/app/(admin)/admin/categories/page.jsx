"use client";
import Loading from "@/common/Loading";
import Link from "next/link";
import { useGetCategories } from "@/hooks/useCategories";
import CategoryListTable from "./CategoryListTable";

const ProductPage = () => {
  const { data, isLoading } = useGetCategories();
  const { categories } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-900">Categories list</h1>
      <h3 className=" p-1 text-primary-800">
        <Link href="/admin/categories/add">add new category</Link>
      </h3>
      <CategoryListTable categories={categories} />
    </>
  );
};

export default ProductPage;

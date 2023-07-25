"use client";
import Loading from "@/common/Loading";
import { useGetProducts } from "@/hooks/useProducts";
import ProductsTable from "./ProductsTable";
import Link from "next/link";

const ProductPage = () => {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-900">Product list</h1>
      <h3 className=" p-1 text-primary-800">
        <Link href="/admin/products/add">add new products</Link>
      </h3>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductPage;

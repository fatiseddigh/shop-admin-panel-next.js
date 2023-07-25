"use client";
import Loading from "@/common/Loading";
import { useGetProducts } from "@/hooks/useProducts";
import ProductsTable from "./ProductsTable";

const ProductPage = () => {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-800">Product list</h1>
      <ProductsTable products={products} />
    </>
  );
};

export default ProductPage;

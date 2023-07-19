import { getCategories } from "@/services/categoryServices";
import { getProducts } from "@/services/productServices";

const Products = async () => {
  const { products } = await getProducts();
  const { categories } = await getCategories();

  return (
    <>
      <h1 className="text-center font-bold py-4">shopping page</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-1 bg-blue-900">side bar</div>
        <div className="col-span-3 bg-red-700">products</div>
      </div>
    </>
  );
};

export default Products;

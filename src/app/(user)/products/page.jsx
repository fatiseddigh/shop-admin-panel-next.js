import { getCategories } from "@/services/categoryServices";
import { getProducts } from "@/services/productServices";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";

export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <>
      <h1 className="text-center font-bold py-4">shopping page</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <div
                key={product._id}
                className="col-span-1 border rounded-xl shadow-md p-4"
              >
                <h2 className="font-bold">{product.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

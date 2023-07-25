import { getCategories } from "@/services/categoryServices";
import { getProducts } from "@/services/productServices";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import Link from "next/link";
import { toLocalDateStringShort } from "@/utils/toLoacalDate";
import AddToCart from "./[slug]/AddToCart";
import LikeProduct from "./LikeProduct";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";

export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  // const { products } = await getProducts(queryString.stringify(searchParams));
  // const { categories } = await getCategories();
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );
  const categoriesPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

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
                <h2 className="font-bold text-xl mb-4">{product.title}</h2>
                <div className="mb-4">
                  <span> Created At : </span>
                  <span className="font-bold">
                    {toLocalDateStringShort(product.createdAt)}
                  </span>
                </div>
                <Link
                  className="text-primary-900 font-bold mb-4 block"
                  href={`/products/${product.slug}`}
                >
                  show product
                </Link>
                <LikeProduct product={product} />
                <AddToCart product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

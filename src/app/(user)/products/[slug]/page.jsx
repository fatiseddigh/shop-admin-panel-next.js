import { getProductBySlug, getProducts } from "@/services/productServices";
import { numberWithCommas } from "@/utils/customNumber";
import AddToCart from "./AddToCart";
export const dynamic = "force-static";
export const dynamicParams = false;

const Page = async ({ params }) => {
  const { slug } = params;
  const { product } = await getProductBySlug(slug);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <p className="mb-6">
        product price :{" "}
        <span className={`${product.discount ? "line-through" : "font-bold"}`}>
          {numberWithCommas(product.price)}
        </span>
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">
            discount price : {numberWithCommas(product.offPrice)}
          </p>
          <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
            {product.discount} %
          </div>
        </div>
      )}
      <AddToCart product={product} />
    </div>
  );
};

export default Page;
export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

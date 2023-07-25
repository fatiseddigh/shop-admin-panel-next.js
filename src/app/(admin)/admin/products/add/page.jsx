"use client";

import { useGetCategories } from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";
import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
const productsFormData = [
  {
    id: 1,
    label: "title",
    name: "title",
  },
  {
    id: 2,
    label: "description",
    name: "description",
  },
  {
    id: 3,
    label: "slug",
    name: "slug",
  },
  {
    id: 4,
    label: "brand",
    name: "brand",
  },
  {
    id: 5,
    label: "price",
    name: "price",
  },
  {
    id: 6,
    label: "discount",
    name: "discount",
  },
  {
    id: 7,
    label: "off Price",
    name: "offPrice",
  },
  {
    id: 8,
    label: "count In Stock",
    name: "countInStock",
  },
  {
    id: 9,
    label: "image Link",
    name: "imageLink",
  },
];
function AddProductPage() {
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
  });
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="mb-4 font-bold text-xl text-primary-900">
        {" "}
        add new product{" "}
      </h1>
      <div className="max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {productsFormData.map((item) => {
            return (
              <TextField
                key={item.id}
                label={item.label}
                name={item.name}
                value={formData[item.name] ?? ""}
                onChange={handChange}
              />
            );
          })}
          <div>
            <label className="mb-2 block" htmlFor="tags">
              products tag
            </label>
            <TagsInput id="tags" value={tags} onChange={setTags} name="tags" />
          </div>
          <div>
            <label htmlFor="category" className="mb-2 block">
              category
            </label>
            <Select
              id="category"
              onChange={setSelectedCategory}
              options={categories}
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option._id}
              defaultValue={selectedCategory}
            />
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">confirm</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProductPage;

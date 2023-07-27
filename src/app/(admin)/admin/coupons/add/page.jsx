"use client";

import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useGetProducts } from "@/hooks/useProducts";
import { useState } from "react";
import Select from "react-select";

function Page() {
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const { data } = useGetProducts();
  const { products } = data || {};
  const [type, setType] = useState("percent");
  const [productsId, setProductsId] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="mb-4 font-bold text-primary-900">
        add new discount coupon
      </h1>
      <div className="max-w-sm">
        <form className="space-y-4">
          <TextField
            label="code"
            name="code"
            onChange={handleChange}
            value={formData.code}
          />
          <TextField
            label="amount"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
          />
          <TextField
            label="usage limit"
            name="usageLimit"
            onChange={handleChange}
            value={formData.usageLimit}
          />
          <div>
            <span className="pb-5"> coupon type</span>
            <div className="flex items-center justify-between">
              <RadioInput
                checked={type === "percent"}
                id="percent-type"
                name="type"
                label="percent"
                value="percent"
                onChange={(e) => setType(e.target.value)}
              />
              <RadioInput
                checked={type === "fixedProduct"}
                id="fixedProduct-type"
                name="type"
                label="fixed product"
                value="fixedProduct"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="products" className="mb-2 block">
              products contain
            </label>
            <Select
              isMulti
              instanceId="products"
              onChange={setProductsId}
              options={products}
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option._id}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;

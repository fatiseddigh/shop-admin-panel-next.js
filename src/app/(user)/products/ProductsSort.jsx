"use client";
import RadioInput from "@/common/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
  { id: 1, value: "latest", label: "latest" },
  { id: 2, value: "earliest", label: "earliest" },
  { id: 3, value: "popular", label: "popular" },
];

const ProductsSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <div>
      <p className="font-bold my-3">sort</p>
      {sortOptions.map((item) => {
        return (
          <RadioInput
            id={item.id}
            key={item._id}
            label={item.label}
            name="product-sort"
            value={item.value}
            checked={sort === item.value}
            onChange={sortHandler}
          />
        );
      })}
    </div>
  );
};

export default ProductsSort;

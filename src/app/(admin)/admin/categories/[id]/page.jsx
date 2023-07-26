"use client";

import Loading from "@/common/Loading";
import { useGetCategoryById } from "@/hooks/useCategories";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  const { isLoading, data } = useGetCategoryById(id);
  const { category } = data || {};
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>{category.title}</h1>
    </div>
  );
}
export default Page;

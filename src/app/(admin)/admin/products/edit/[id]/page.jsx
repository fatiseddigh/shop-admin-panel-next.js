"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  if (isLoading) return <Loading />;
  return <div>page {id}</div>;
}

export default Page;

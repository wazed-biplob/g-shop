import Product from "@/components/product/Product";
import React from "react";

const ProeductPage = async ({ params, searchParams }: any) => {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();
  const id = params.productId;
  const product = data?.data?.find((fish: any) => fish.id == id);
  return (
    <>
      <Product product={product} />
    </>
  );
};

export default ProeductPage;

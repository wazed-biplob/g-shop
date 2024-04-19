import Product from "@/components/product/Product";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/fish");
  const data = await res.json();
  return data?.data
    ?.slice(0, 3)
    .map((product: any) => ({ productId: String(product.id) }));
};

const SingleProductPage = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/fish/${params?.productId}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <>
      <Product product={data} />
    </>
  );
};

export default SingleProductPage;

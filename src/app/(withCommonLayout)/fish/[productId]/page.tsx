import { TProduct } from "@/app/types/type";
import Product from "@/components/product/Product";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/fish");
  const data = await res.json();
  return data?.data
    ?.slice(0, 10)
    .map((product: TProduct) => ({ productId: String(product.id) }));
};

const SingleProductPage = async ({ params }: { params: any }) => {
  const res = await fetch(
    `https://ocean-server.vercel.app/api/fish/${params?.productId}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <>
      <Product product={data?.data[0]} />
    </>
  );
};

export default SingleProductPage;

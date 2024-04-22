import React from "react";
import Button from "@/components/shared/Button";
import MostPopularProductCard from "../MostPopularProductCard";

const MostPopularProducts = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/most-popular", {
    cache: "no-store",
  });

  const data = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Most Popular Products</p>
        <Button classNames={``} text="View All >" />
      </div>
      <div className="grid grid-cols-4 gap-2 justify-center">
        {data?.data?.map((card: any) => (
          <>
            <MostPopularProductCard fish={card} key={card.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;

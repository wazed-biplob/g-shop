import React from "react";
import Card from "../Card";

const MostPopularProducts = async () => {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Most Popular Products</p>
        <button className="border rounded-[64px] py-[12px] px-[28px] text-white bg-black">
          <span className="font-[600px] text-[26px]">View All &nbsp; &gt;</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 justify-center">
        {data?.data?.slice(0, 8).map((card: any) => (
          <>
            <Card card={card} key={card.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;

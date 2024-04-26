"use client";
import CountdownTimer from "@/app/lib/CountdownTimer";
import { TProduct, TResponseData } from "@/app/types/type";
import FlashSaleCard from "@/components/homepage/FlashSaleCard";
import { useEffect, useState } from "react";

const FlashSalePage = () => {
  const [data, setData] = useState<TResponseData>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://ocean-server.vercel.app/api/flash-sale?page=true",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="font-sans w-[90%] mx-auto flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <h1 className="py-6 text-4xl font-semibold">Flash Sale</h1>
        <div className="bg-slate-500 text-white px-4 rounded-md">
          <CountdownTimer
            targetDate={"2024-04-06T12:00:00.000Z"}
            countdown={200}
          />
        </div>
      </div>
      <div className="col-span-6 sm:col-span-8 grid grid-cols-3 gap-x-2">
        {data?.data?.map((card: TProduct) => (
          <FlashSaleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;

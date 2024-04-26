import { TProduct } from "@/app/types/type";
import TrendingProductCard from "../TrendingProductCard";
import Button from "@/components/shared/Button";
import Link from "next/link";
const TrendingProducts = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/most-popular", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center w-[90%] mx-auto mt-[100px]">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Trending Products</p>
        <Link href="/fish">
          <Button text="View All" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-4 justify-center">
        {data?.data?.slice(0, 6).map((fish: TProduct) => (
          <>
            <TrendingProductCard key={fish.id} fish={fish} />
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

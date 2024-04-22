import Button from "@/components/shared/Button";
import FlashSaleCard from "../FlashSaleCard";
import TrendingProductCard from "../TrendingProductCard";
const TrendingProducts = async () => {
  const res = await fetch(
    "https://oceans-bounty-server.vercel.app/api/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center w-[90%] mx-auto mt-[100px]">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Trending Products</p>
        <Button text="View All >" />
      </div>
      <div className="grid grid-cols-3 gap-x-4 justify-center">
        {data?.data?.slice(0, 4).map((card: any) => (
          <>
            <TrendingProductCard key={card.id} card={card} />
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

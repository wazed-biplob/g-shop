import Button from "@/components/shared/Button";
import FlashSaleCard from "../FlashSaleCard";
const FlashSale = async () => {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();

  return (
    <div className="flex flex-col w-[90%] mx-auto mt-[100px]">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Flash Sale</p>
        <Button text="View All >" />
      </div>
      <div className="grid grid-cols-4 gap-x-2 justify-center">
        {data?.data?.slice(0, 4).map((card: any) => (
          <>
            <FlashSaleCard card={card} key={card.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

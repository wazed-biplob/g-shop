import Button from "@/components/shared/Button";
import FlashSaleCard from "../FlashSaleCard";
import Link from "next/link";
import { TProduct } from "@/app/types/type";
const FlashSale = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <div className="flex flex-col w-[90%] mx-auto mt-[100px]">
      <div className="flex justify-between items-center w-full mb-[26px]">
        <p className="text-[36px] font-bold">Flash Sale</p>
        <Link href="/flash-sale">
          {" "}
          <Button text="View All >" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-3 justify-center">
        {data?.data?.slice(0, 4).map((card: TProduct) => (
          <>
            <FlashSaleCard card={card} key={card.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

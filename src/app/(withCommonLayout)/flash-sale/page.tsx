import FlashSaleCard from "@/components/homepage/FlashSaleCard";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://oceans-bounty-server.vercel.app/api/flash-sale",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div className="w-[98%] mx-auto flex flex-col justify-center">
      <div>
        <h1 className="py-6 text-4xl font-semibold">Flash Sale</h1>
      </div>
      <div className="col-span-6 sm:col-span-8 grid grid-cols-3 gap-x-2">
        {data?.data?.map((card: any) => (
          <FlashSaleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;

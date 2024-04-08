import Card from "../Card";
const CardSection = async () => {
  const res = await fetch("https://g-shop-server.vercel.app/api/category");
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex gap-x-2 px-4 justify-center">
      {data?.data?.slice(0, 4).map((card: any) => (
        <>
          <Card card={card} key={card.id} />
        </>
      ))}
    </div>
  );
};

export default CardSection;

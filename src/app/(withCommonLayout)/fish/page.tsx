import MostPopularProductCard from "@/components/homepage/MostPopularProductCard";
import React from "react";

const AllProductPage = async ({ searchParams }: any) => {
  let res;
  if (searchParams.category) {
    res = await fetch(
      `http://localhost:5000/api/fish?category=${searchParams.category}`,
      { cache: "no-store" }
    );
  } else {
    res = await fetch("http://localhost:5000/api/fish", {
      cache: "no-store",
    });
  }

  const data = await res.json();
  console.log(data);
  return (
    <div className="w-[90%] mx-auto">
      <div className=" mx-4 min-h-screen max-w-screen-xl xl:mx-auto">
        <h1 className="py-6 text-4xl font-semibold">All Products</h1>

        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="col-span-2 hidden sm:block">
            <p>Sidebar</p>
          </div>
          <div className="col-span-6 sm:col-span-8 grid grid-cols-3 gap-x-2">
            {data?.data?.map((fish: any) => (
              <MostPopularProductCard key={fish?.id} fish={fish} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;

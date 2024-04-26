import { TProduct } from "@/app/types/type";
import ProductCard from "@/components/homepage/sections/ProductCard";
import Sidebar from "@/components/product/Sidebar";

const AllProductPage = async ({ searchParams }: { searchParams: any }) => {
  let res;
  if (searchParams.category) {
    res = await fetch(
      `https://ocean-server.vercel.app/api/fish?category=${searchParams.category}`,
      { cache: "no-store" }
    );
  } else if (searchParams.price) {
    res = await fetch(
      `https://ocean-server.vercel.app/api/fish?price=${searchParams.price}`,
      { cache: "no-store" }
    );
  } else if (searchParams.rating) {
    res = await fetch(
      `https://ocean-server.vercel.app/api/fish?rating=${searchParams.rating}`,
      { cache: "no-store" }
    );
  } else {
    res = await fetch("https://ocean-server.vercel.app/api/fish", {
      cache: "no-store",
    });
  }

  const data = await res.json();
  return (
    <div className="font-sans w-[90%] mx-auto">
      <div className=" mx-4 min-h-screen max-w-screen-xl xl:mx-auto">
        <h1 className="py-6 text-4xl font-semibold">All Products</h1>

        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <Sidebar />
          <div className="col-span-6 sm:col-span-8 grid grid-cols-3 gap-x-2">
            {data?.data.length == 0 ? (
              <p>No Product Found</p>
            ) : (
              data?.data?.map((fish: TProduct) => (
                <ProductCard key={fish?.id} fish={fish} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;

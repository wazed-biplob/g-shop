import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { TCategories, TProduct } from "@/app/types/type";

const TopCategories = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/categories", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="my-[100px] w-[90%] mx-auto border">
      <div className="text-center">
        <h1 className="text-[36px] font-bold mt-3">Top Categories</h1>
        <p className="my-3 text-[grey] px-4">
          Browse through our pantry essentials for all your cooking and baking
          needs.
          <br /> Stock up on high-quality grains, pastas, sauces, and spices to
          elevate your culinary creations.
          <br /> Whether you are preparing a family dinner or hosting a dinner
          party, our pantry selection has got you covered.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 px-8 mt-8">
        {data?.data.map((category: TCategories) => (
          <div
            key={category._id}
            className={`${styles["parent-container"]} w-full row-span-2 relative`}
          >
            <Link href={`fish?category=${category._id}`}>
              <Image
                className="rounded-xl hover:opacity-50"
                src={category.items[0].imageURL}
                alt="image"
                width={400}
                height={400}
              />{" "}
            </Link>
            <span className="absolute w-full left-[0] bottom-[0] text-white text-[22px]">
              <div className="">
                <div className="group opacity-60 relative px-2 py-2 rounded-br-md rounded-bl-md border bg-slate-300 text-black  shadow-lg transition-all duration-200 ease-in-out">
                  <h3 className="uppercase text-[16px] font-bold text-black">
                    {category?.total} Items
                  </h3>
                  <p className="mt-2 font-sans text-3xl font-bold">
                    {category._id}
                  </p>
                  <p className="mt-4">
                    {category?.items?.map((item: TProduct) => (
                      <span className="mr-2 font-bold" key={item?.id}>
                        {item?.title}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

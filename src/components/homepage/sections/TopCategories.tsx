import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Button from "@/components/shared/Button";

const TopCategories = async () => {
  const res = await fetch(
    "https://oceans-bounty-server.vercel.app/api/categories"
  );
  const data = await res.json();
  return (
    <div className="my-[100px] mt-[170px] w-[90%] mx-auto border">
      <div className="text-center">
        <h1 className="text-[36px] font-bold mt-3">Top Categories</h1>
        <p className="my-3 text-[grey]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, minus.
          Nam esse in aut pariatur sunt eius,
          <br /> modi quae quaerat odio a rem iste, nulla asperiores perferendis
          accusamus impedit reiciendis.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 px-8 mt-8">
        <div
          className={`${styles["parent-container"]} w-full row-span-2 relative`}
        >
          <Image
            className="rounded-xl"
            src={data?.data[0].items[0].imageURL}
            alt="image"
            width={400}
            height={400}
          />
          <p className="absolute left-[16px] bottom-[20px] text-white text-[22px]">
            SaltWater Fish
          </p>
        </div>
        <div className={`${styles["parent-container"]} w-full row-span-1`}>
          <Image
            className="rounded-xl"
            width={400}
            height={400}
            src={data?.data[1].items[0].imageURL}
            alt="image"
          />
        </div>
        <div className={`${styles["parent-container"]} w-full row-span-2`}>
          <Image
            className="rounded-xl"
            width={400}
            height={400}
            src={data?.data[0].items[0].imageURL}
            alt="image"
          />
        </div>
        <div className={`${styles["parent-container"]} w-full row-span-1`}>
          <Image
            className="rounded-xl"
            width={400}
            height={400}
            src={data?.data[1].items[0].imageURL}
            alt="image"
          />
        </div>
      </div>
      <div className="mt-[68px] mx-auto text-center mb-[10px]">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default TopCategories;

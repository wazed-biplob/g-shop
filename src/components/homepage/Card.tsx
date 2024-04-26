import Image from "next/image";
import React from "react";
import styles from "./sections/style.module.css";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { TProduct } from "@/app/types/type";
const Card = ({ card }: { card: TProduct }) => {
  return (
    <div className="flex flex-col border rounded-lg pb-2">
      <div className={`${styles["parent-container"]} relative`}>
        <Image
          className="z-50 rounded-tl-lg rounded-tr-lg"
          src={card?.imageURL}
          width={400}
          height={800}
          alt="image"
        />
        <p className="absolute top-4 left-4 px-4 py-1 bg-[#3d3d3d] text-[#ffffff] rounded-lg">
          -{card?.discount}%
        </p>
      </div>
      <div className="w-[90%] mx-auto pt-2">
        <p className="text-[22px] text-white font-[400]">{card?.title}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="line-through text-white text-[24px]">
              ${card?.price}
            </span>
            <span> </span>
            <span className="text-[34px] text-white">
              ${(card?.price - card?.price * (card?.discount / 100)).toFixed(2)}
            </span>
          </div>

          <Link href={`/fish/${card?.id}`}>
            <CiCirclePlus style={{ fontSize: "46px", color: "white" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

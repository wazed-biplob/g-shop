import Image from "next/image";
import React from "react";
import styles from "./sections/style.module.css";
import { CiCirclePlus } from "react-icons/ci";
const Card = ({ card }: any) => {
  return (
    <div className="flex flex-col border rounded-lg pb-2">
      <div className={`${styles["parent-container"]} relative`}>
        <Image
          className="z-50 rounded-tl-lg rounded-tr-lg"
          src={card?.imageURL}
          width={400}
          height={800}
          alt="image"
          objectFit="cover"
        />
        <p className="absolute top-4 left-4 px-4 py-1 bg-[#3d3d3d] text-[#ffffff] rounded-lg">
          -{card?.discount}%
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <p className="text-[22px] text-[#404040] font-[400]">{card?.title}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="line-through text-[#404040] text-[14px]">
              ${card?.price}
            </span>
            <span> </span>
            <span className="text-[14px] text-black font-bold">
              ${(card?.price - card?.price * (card?.discount / 100)).toFixed(2)}
            </span>
          </div>

          <button>
            <CiCirclePlus style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

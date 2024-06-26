"use client";
import CountdownTimer from "@/app/lib/CountdownTimer";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { TProduct } from "@/app/types/type";
const FlashSaleCard = ({ card }: { card: TProduct }) => {
  return (
    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px]">
      <div className="relative">
        <Image
          width={200}
          height={200}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src={card?.imageURL}
          alt="card"
        />

        <div
          className={styles.blink}
          style={{
            width: "100%",
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "0 15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <CountdownTimer
            targetDate={card?.updatedAt}
            countdown={card?.countdown}
          />
          <p className="text-white">{card?.discount}%</p>
        </div>
      </div>

      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{card?.title}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60">
          {(card?.description).substring(0, 100) + "..."}
        </p>
        <div className="flex justify-between items-center text-lg font-semibold">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${card?.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${(card?.price - card?.price * (card?.discount / 100)).toFixed(2)}
            </span>
          </p>
          <span className="rounded flex justify-center py-2 items-center bg-yellow-200 px-2.5 text-xs font-semibold">
            {card?.rating}
          </span>
        </div>
      </div>
      <div className="flex gap-4 justify-between">
        <Link href={`./fish/${card?.id}`}>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
            View Details
          </button>
        </Link>
        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FlashSaleCard;

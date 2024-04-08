import Image from "next/image";
import React from "react";

import { MdOutlineFileDownload } from "react-icons/md";
const Card = ({ card }: any) => {
  return (
    <div className="flex flex-col border rounded-lg">
      <div className="relative">
        <Image
          className="z-50 rounded-tl-lg rounded-tr-lg"
          width={400}
          height={400}
          src={card?.imageURL}
          alt="image"
        />
        <p className="absolute top-4 left-4 border px-4 py-1 bg-slate-400 rounded-lg">
          30%
        </p>
      </div>
      <p className="text-[26px]">{card?.title}</p>
      <div className="flex justify-between items-center">
        <p>${card?.price}</p>
        <button>
          <MdOutlineFileDownload style={{ fontSize: "36px" }} />
        </button>
      </div>
    </div>
  );
};

export default Card;

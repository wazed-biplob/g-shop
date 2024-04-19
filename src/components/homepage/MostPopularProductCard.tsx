import Image from "next/image";
import React from "react";

const MostPopularProductCard = ({ fish }: any) => {
  return (
    <>
      <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
        <a href="#">
          <Image
            className="h-60 rounded-t-lg object-cover"
            src={fish?.imageURL}
            alt="product image"
            width={400}
            height={400}
          />
        </a>
        {fish?.flashSale ? (
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-white font-bold text-center text-sm text-black">
            FLASH
          </span>
        ) : (
          <></>
        )}

        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              {fish?.title}
            </h5>
          </a>
          <div className="mt-2.5 mb-5 flex items-center">
            <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {fish?.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${fish?.price}
              </span>
              <span className="text-sm text-slate-900 line-through">
                $
                {(fish?.price - fish?.price * (fish?.discount / 100)).toFixed(
                  2
                )}
              </span>
            </p>
            <a
              href="#"
              className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopularProductCard;

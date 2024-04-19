import Image from "next/image";
import React from "react";

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/api/fish");
  const data = await res.json();
  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <span className="text-xs text-gray-500">All Products LIst</span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-400 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Serial No</th>
                  <th className="px-5 py-3">Product Name</th>
                  <th className="px-5 py-3">Product Id</th>
                  <th className="px-5 py-3">Product Price</th>
                  <th className="px-5 py-3">Discount</th>
                  <th className="px-5 py-3">Flash Sale</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {data?.data?.map((product: any, idx: any) => (
                  <tr key={product?.id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{idx + 1}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <Image
                            width={100}
                            height={100}
                            src={product?.imageURL}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">{product?.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{product?._id}</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">${product?.price}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{product?.discount}%</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                        {product?.flashSale ? "FlashSale" : "Regular"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              {" "}
              Showing 1 to 5 of 12 Entries{" "}
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;

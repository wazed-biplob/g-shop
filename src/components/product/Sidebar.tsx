"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleInput = (e: string) => {
    setInput(e);
  };
  useEffect(() => {
    if (!input) {
      router.push("");
    } else {
      router.push(`fish/?${input}`);
    }
  }, [input, router]);
  return (
    <>
      <div className="col-span-2 sm:block">
        <div className="flex flex-col sm:flex-col gap-y-2">
          <div className="w-fit border space-y-2 p-10">
            <h2 className="text- font-medium text-gray-700">
              Select your options
            </h2>
            <div>
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=11-20"
                  checked={input === "price=11-20"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $11.00 - $20.00
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=21-30"
                  checked={input === "price=21-30"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $21.00 - $30.00
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=31-40"
                  checked={input === "price=31-40"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $31.00 - $40.00
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=41-50"
                  checked={input === "price=41-50"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $41.00 - $50.00
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=51-60"
                  checked={input === "price=51-60"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $51.00 - $60.00
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="price=61-70"
                  checked={input === "price=61-70"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                $61.00 - $70.00
              </label>
            </div>
          </div>
          <div className="w-fit border space-y-2 p-10">
            <h2 className="text- font-medium text-gray-700">Select Category</h2>
            <div>
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=freshwater"
                  checked={input === "category=freshwater"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                FreshWater
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=saltwater"
                  checked={input === "category=saltwater"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                Saltwater
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=Exotic Saltwater"
                  checked={input === "category=Exotic Saltwater"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                Exotic Saltwater
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=Smoked"
                  checked={input === "category=Smoked"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                Smoked Fish
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=Deep Sea Fish"
                  checked={input === "category=Deep Sea Fish"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                Deep Sea Fish
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="category=Shellfish"
                  checked={input === "category=Shellfish"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                Shellfish
              </label>
            </div>
          </div>
          <div className="w-fit border space-y-2 p-10">
            <h2 className="text- font-medium text-gray-700">Ratings</h2>
            <div>
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="rating=1"
                  checked={input === "rating=1"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                1 Star
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="rating=2"
                  checked={input === "rating=2"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                2 Star
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="rating=3"
                  checked={input === "rating=3"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                3 Star
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="rating=4"
                  checked={input === "rating=4"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                4 Star
              </label>
              <br />
              <label>
                <input
                  className="mr-4"
                  type="checkbox"
                  value="rating=5"
                  checked={input === "rating=5"}
                  onChange={(e) => handleInput(e.target.value)}
                />
                5 Star
              </label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import Image from "next/image";
import Link from "next/link";
import { AiFillDatabase } from "react-icons/ai";

const DashBoardLayout = ({ children }: any) => {
  return (
    <>
      <div className="bg-slate-200 flex h-screen">
        <aside className="fixed z-50 md:relative">
          <input type="checkbox" className="peer hidden" id="sidebar-open" />
          <label
            className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
            htmlFor="sidebar-open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Sidebar Navigation"
            className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72"
          >
            <div className="bg-slate-800 pl-10 pb-[17px]">
              <Link href={"/"}>
                <span className="text-blue-300 font-bold text-[40px]">
                  Ocean
                </span>
                &apos;s Bounty
              </Link>
            </div>

            <ul className="mt-8 space-y-3 md:mt-20">
              <Link href="/dashboard">
                {" "}
                <li className="relative">
                  <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </span>
                    <span className="">Dashboard</span>
                  </button>
                </li>
              </Link>
              <Link href="/dashboard/all-products">
                {" "}
                <li className="relative">
                  <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-9 py-4 text-gray-300 focus:outline-none">
                    <span>
                      <AiFillDatabase className="text-[26px]" />
                    </span>
                    <span className="">All Products</span>
                  </button>
                </li>
              </Link>
            </ul>
          </nav>
        </aside>

        <div className="flex h-full w-full flex-col">
          <header className="relative flex flex-col items-center bg-white px-4 shadow sm:flex-row md:h-20">
            <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
              <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto"></div>
              <div className="mt-auto ml-10 flex cursor-pointer">
                <div>
                  <Image
                    width={40}
                    height={40}
                    style={{ borderRadius: "100%" }}
                    src="https://i.ibb.co/hchmyy2/i-2.jpg"
                    alt="profile-picture"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Mr. John Doe</p>
                  <p className="text-sm text-gray-300">Super Admin</p>
                </div>
              </div>
            </div>
          </header>

          <div className="h-full overflow-hidden pl-10">
            <main
              id="dashboard-main"
              className="h-[calc(100vh-2rem)] overflow-auto px-4 py-10"
            >
              <div>{children}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;

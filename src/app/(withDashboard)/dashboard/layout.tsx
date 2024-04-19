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
            <div className="bg-slate-800 pl-10 pb-3">
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

            <div className="my-6 mt-auto ml-10 flex cursor-pointer">
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="ml-3">
                <p className="font-medium">Diana Reeves</p>
                <p className="text-sm text-gray-300">Kyiv, Ukraine</p>
              </div>
            </div>
          </nav>
        </aside>

        <div className="flex h-full w-full flex-col">
          <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
            <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
              <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto"></div>

              <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
                <li className="">
                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="">
                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="">
                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </header>

          <div className="h-full overflow-hidden pl-10">
            <main
              id="dashboard-main"
              className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
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

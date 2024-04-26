import React from "react";

const StateSection = () => {
  return (
    <>
      <section className="mx-auto pb-4 leading-6 text-blue-900 bg-gray-200">
        <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-4 md:gap-8">
            <div className="overflow-hidden border-b-4 border-zinc-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-14 w-14 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <h3 className="ml-2 text-6xl font-bold leading-none">328</h3>
                </div>
                <p className="mt-6 text-base md:max-w-xs">
                  Our pride lies in the smiles of our satisfied clients. From
                  fresh produce to pantry essentials, we cater to every need
                  with dedication, ensuring each visit leaves our clients
                  delighted and eager to return.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border-b-4 border-zinc-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-14 w-14 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <h3 className="ml-2 text-6xl font-bold leading-none">16</h3>
                </div>
                <p className="mt-6 text-base md:max-w-xs">
                  Dive into the art of culinary mastery with our immersive
                  cooking classes. Led by experienced chefs, discover the
                  secrets behind delectable dishes, honing your skills in a
                  welcoming environment designed to inspire culinary creativity.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border-b-4 border-zinc-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-14 w-14 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="ml-2 text-6xl font-bold leading-none">41+</h3>
                </div>
                <p className="mt-6 text-base md:max-w-xs">
                  Embark on a journey of culinary triumphs with our successful
                  projects. From catering grand events to collaborating with
                  esteemed partners, our track record speaks volumes, reflecting
                  our commitment to excellence and delivering exceptional
                  culinary experiences.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border-b-4 border-zinc-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-14 w-14 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h3 className="ml-2 text-6xl font-bold leading-none">99%</h3>
                </div>
                <p className="mt-6 text-base md:max-w-xs">
                  Hear what our valued customers have to say about their
                  experiences. With glowing testimonials highlighting our
                  quality products, attentive service, and memorable culinary
                  adventures, our customer reviews stand as a testament to our
                  unwavering dedication to exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateSection;

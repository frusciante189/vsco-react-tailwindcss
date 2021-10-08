import React from "react";

const Header = () => {
  return (
    <div className="bg-[#EDBB3A] w-full min-h-[75vh]">
      <div className="lg:px-20 px-5 flex items-center justify-center w-full h-full">
        <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start justify-around w-full">
          <div className="flex flex-col lg:w-1/3 w-full">
            <h1 className="lg:text-[18px] text-base font-semibold pb-4 mt-8 lg:mt-0">
              VSCO Community
            </h1>
            <span className="lg:text-5xl text-3xl font-semibold pb-9">
              How can we help?
            </span>
            <label className="relative">
              <input
                type="text"
                placeholder="Type a question"
                className="bg-transparent border-black rounded-full pl-12 py-2.5 lg:w-3/4 w-full placeholder-black text-black focus:outline-none focus:ring-0"
              />
              <span className="absolute top-3 left-4">
                <svg
                  class="w-5 h-5"
                  fill="black"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <div className="lg:mt-32 py-12 flex space-x-5 items-center w-full">
              <span>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 25C50 11.19 38.81 0 25 0C11.19 0 0 11.19 0 25C0 38.81 11.19 50 25 50C38.81 50 50 38.81 50 25ZM1 25C1 11.77 11.77 1 25 1C38.23 1 49 11.77 49 25C49 38.23 38.23 49 25 49C11.77 49 1 38.23 1 25ZM30.74 37.66C30.74 40.83 28.16 43.4 25 43.4C21.84 43.4 19.26 40.82 19.26 37.66H20.26C20.26 40.27 22.39 42.4 25 42.4C27.61 42.4 29.74 40.27 29.74 37.66H30.74ZM31.09 22.48L32 22.06C31.73 21.48 31.71 20.84 31.93 20.24C32.15 19.64 32.59 19.17 33.17 18.9C33.99 18.52 34.81 18.63 35.5 19.19C35.82 19.45 36.09 19.77 36.38 20.11V20.12C36.76 20.57 37.16 21.03 37.69 21.38C38.68 22.05 39.82 22.18 40.82 21.71C41.64 21.33 42.26 20.66 42.57 19.81C42.88 18.96 42.84 18.04 42.47 17.22L41.56 17.64C41.83 18.22 41.85 18.86 41.63 19.46C41.41 20.06 40.97 20.53 40.39 20.8C39.71 21.12 38.94 21.03 38.24 20.55C37.82 20.26 37.48 19.87 37.12 19.45C36.82 19.1 36.5 18.74 36.12 18.42C35.14 17.6 33.9 17.45 32.74 17.99C31.92 18.37 31.3 19.04 30.99 19.89C30.67 20.74 30.71 21.66 31.09 22.48ZM29.88 32.2H22.12V31.2H28.48L22.76 14.6L23.71 14.27L29.88 32.2Z"
                    fill="#EB4927"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-start justify-center space-y-2">
                <h1 className="font-semibold">
                  Didn't find what you're looking for?
                </h1>
                <p className="text-sm font-medium">
                  Visit the Community forum to share a
                  <span className="underline"> feature request</span>,
                  <span className="underline"> find solutions</span> and
                  <span className="underline"> talk creativity</span> with
                  creators and staff!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://theme.zdassets.com/theme_assets/116868/c851e8aeee90bde5956388656f57aa3e2cabd1d1.jpg"
              alt=""
              className="lg:max-w-[429px] lg:h-[481px] max-w-xs min-h-[375px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

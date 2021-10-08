import React from "react";

const Header = () => {
  return (
    <div className="bg-[#F3B2BC] w-full h-[75vh]">
      <div className="lg:px-20 px-5 flex items-center justify-center w-full h-full">
        <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start justify-around w-full">
          <div className="flex flex-col lg:w-1/3 w-full">
            <h1 className="lg:text-[18px] text-base font-semibold pb-4 mt-8 lg:mt-0">
              VSCO Community
            </h1>
            <span className="lg:text-5xl text-3xl font-semibold pb-9">
              Welcome to your community
            </span>
            <label className="relative">
              <input
                type="text"
                placeholder="Search the help community"
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
          </div>
          <div>
            <img
              src="https://theme.zdassets.com/theme_assets/116868/9f3812844e342196cb18fdb3bd8e4137719debd1.jpg"
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

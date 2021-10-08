import React from "react";

const Ask = () => {
  return (
    <div className="bg-[#F3B2BC]">
      <div className="container mx-auto  py-16">
        <div className="lg:flex lg:flex-row flex-col items-center justify-evenly py-4">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <h1 className="font-semibold text-[44px] mb-5 text-center lg:text-left">
              Ask the community.
            </h1>
            <span className="pb-7 font-semibold text-[18px] text-center lg:text-left">
              Find solutions, share ideas and talk creativity <br /> with other
              creators and staff.
            </span>
            <button className="text-[#AAC9D1] bg-black px-8 py-2 rounded-sm">
              Join the conversation
            </button>
          </div>
          <div className="flex space-x-4 items-center justify-center mt-5 lg:mt-0">
            <img
              src="https://theme.zdassets.com/theme_assets/116868/6c40aacaa4d45463b7443a428558ef9a7d543b07.jpg"
              alt="ask"
              className="lg:w-[204px] w-2/5 h-1/2 lg:h-[271px] lg:-translate-y-8 -translate-y-0"
            />
            <img
              src="https://theme.zdassets.com/theme_assets/116868/2fbfb6aaefe158b20723418171973e02f8102edd.jpg"
              alt="ask"
              className="lg:w-[204px] w-2/5 h-1/2 lg:h-[271px] lg:translate-y-8 translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;

import React from "react";
import data from "../Home/CommunityAPI";

const Community = () => {
  return (
    <div className="w-full h-full">
      <div className="flex md:flex-row flex-col">
        {data.map((section) => {
          return (
            <div
              className={`flex flex-col items-center justify-start pt-24 lg:pl-32 pl-8 h-full lg:w-1/2 w-full ${section.bg}`}
            >
              <div className="ml-auto">
                <img
                  src={section.img}
                  alt="pp"
                  className="max-w-xs max-h-[330px] mb-14"
                />
                <div className="pb-16">
                  <h1 className="text-3xl font-semibold mb-4">
                    {section.title}
                  </h1>
                  <p className="font-semibold lg:w-7/12 mb-6 h-24">
                    {section.descp}
                  </p>
                  <button className="px-4 bg-black text-white font-semibold py-3 xl:w-2/5 w-1/2">
                    {section.title}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;

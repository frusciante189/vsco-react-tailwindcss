import React from "react";
import data from "../Support/SupportAPI";

const Topics = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="py-16 px-7 lg:px-0">
        <h1 className="pb-10 font-semibold text-2xl">Community Forum Topics</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
          {data.map((section) => {
            return (
              <div className="border border-black px-4 pt-5 pb-10 flex flex-col lg:max-w-sm w-full">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold hover:text-[#ae995a]">
                      {section.title}
                    </span>
                    <span className="text-gray-400 font-semibold text-sm">
                      {section.alt}
                    </span>
                  </div>
                  <span
                    className={`${section.bg} rounded-full w-11 h-11 flex items-center justify-center`}
                  >
                    {section.icon && <img src={section.icon} alt="icon" />}
                  </span>
                </div>
                <div className="lg:flex hidden flex-col space-y-4 font-semibold text-sm text-gray-800 mt-5">
                  {section.content.map((item) => {
                    return <span>{item.topic}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topics;

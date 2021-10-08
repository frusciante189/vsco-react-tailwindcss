import React from "react";
import data from "./ForumAPI";

const Forum = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="py-16 px-7 lg:px-0">
        <h1 className="pb-10 font-semibold text-2xl">Community Forum Topics</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
          {data.map((section) => {
            return (
              <div className="border border-black px-4 pt-5 pb-10 flex flex-col space-y-2 lg:max-w-sm w-full">
                <div className="flex justify-between">
                  <span className="text-2xl font-semibold hover:text-[#ae995a]">
                    {section.title}
                  </span>
                  <span
                    className={`${section.bg} rounded-full w-11 h-11 flex items-center justify-center`}
                  >
                    {section.icon && <img src={section.icon} alt="icon" />}
                  </span>
                </div>
                <span className="font-semibold text-gray-400">
                  {section.descp}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forum;

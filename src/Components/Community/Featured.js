import React from "react";
const data = [
  {
    title: "Life's a Blur: Creative Tutorial",
  },
  {
    title: "How to Pose your Subject - Creative Tutorial",
  },
  {
    title: "Rethinking the Selfie - Creative Tutorial",
  },
];

const Featured = () => {
  return (
    <div className="bg-[#EDBB3A]">
      <div className="max-w-4xl mx-auto pt-10 pb-20">
        <div className="flex flex-col lg:px-0 px-5">
          <h1 className="text-black pb-5 text-2xl font-medium">
            Featured posts
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {data.map((item) => {
              return (
                <div className="border border-black hover:border-gray-500 transition-colors transform duration-200 lg:max-w-sm w-full px-3 pt-6 pb-10 ">
                  <h1 className="text-black">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

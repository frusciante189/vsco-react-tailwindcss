import React from "react";
const data = [
  {
    title: "Lost Access to VSCO Account",
  },
  {
    title: "How do I delete my VSCO Account?",
  },
  {
    title: "Account and Device Verification",
  },
];

const FAQ = () => {
  return (
    <div className="bg-black">
      <div className="max-w-4xl mx-auto pt-10 pb-20">
        <div className="flex flex-col px-5 lg:px-0">
          <h1 className="text-white pb-5 text-2xl font-medium">
            Recently Viewed
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
            {data.map((item) => {
              return (
                <div className="border border-white hover:border-[#EDBB3A] transition-colors transform duration-200 lg:max-w-sm w-full px-3 pt-6 pb-10">
                  <h1 className="text-white">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;

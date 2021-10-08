import React from "react";

const Trial = () => {
  return (
    <>
      <img
        src="https://assets.vsco.co/assets/images/homepage-2020/montage-hero_3@2x.jpg"
        alt=""
        className="h-screen w-full object-cover relative"
      />
      <div className="bg-red-500 w-full flex items-center">
        <div className="flex flex-col items-center w-full absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="text-7xl font-extrabold uppercase text-white tracking-wider text-center w-full">
            Become a member
          </h1>
          <p className="text-center text-white text-xl">
            Get the latest tools and exclusive <br /> inspirational content with
            <br /> VSCO membership.
          </p>
          <button className="mt-6 bg-[#0000ff] text-white px-4 py-3 font-semibold rounded-sm">
            Start your free 7-day trial
          </button>
        </div>
      </div>
    </>
  );
};

export default Trial;

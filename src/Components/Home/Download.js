import React from "react";

const Download = () => {
  return (
    <>
      <img
        src="https://assets.vsco.co/assets/images/homepage-2020/montage-hero_2@2x.jpg"
        alt=""
        className="h-screen w-full object-cover relative"
      />
      <div className="bg-red-200 w-full flex items-center">
        <div className="flex flex-col items-center w-full md:items-start md:w-1/3 absolute z-40 md:top-1/2 md:left-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-1/2 ">
          <h1 className="text-2xl text-white tracking-wider text-center md:text-left w-full">
            Make it Anyway. <br /> Make it with VSCO.
          </h1>
          <button className="mt-6 bg-black text-white px-4 py-3 font-semibold rounded-sm xl:w-1/3 lg:w-1/2">
            Download VSCO
          </button>
        </div>
      </div>
    </>
  );
};

export default Download;
// md:left-[20%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

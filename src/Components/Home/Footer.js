import React from "react";
import data from "./FooterAPI";
const Footer = () => {
  return (
    <div className="bg-black text-white text-xs">
      <div className="flex xl:flex-row lg:flex-col lg:justify-between justify-center items-center px-10 py-14 ">
        <div className="lg:grid grid-cols-4 w-2/3 gap-x-3 hidden">
          {data.map((section) => {
            return (
              <div className="flex flex-col space-y-2">
                <h1 className="font-bold">{section.section}</h1>
                <div className="flex flex-col space-y-2">
                  {section.content.map((item) => {
                    return (
                      <span className="hover:text-yellow-300 cursor-pointer">
                        {item.title}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 lg:mt-0">
          <span className="font-semibold">
            &copy; 2021. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

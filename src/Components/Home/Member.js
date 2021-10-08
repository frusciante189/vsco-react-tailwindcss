import React from "react";
import data from "../Home/SubsData";

const Member = () => {
  return (
    <>
      <div className="bg-white">
        <div className=" max-w-screen-xl mx-auto w-full px-8">
          <div className="grid grid-cols-2">
            {data.map((section) => {
              return (
                <div className="py-16">
                  <div className="flex flex-col items-start">
                    <h1 className="text-2xl font-semibold">{section.title}</h1>
                    <span className="text-xl">{section.type}</span>
                    <button
                      className={`${section.buttonColor} text-white px-4 py-3 font-semibold rounded-sm mt-8`}
                    >
                      {section.button}
                    </button>
                  </div>
                  <div className="flex flex-col">
                    {section.content.map((item) => {
                      return (
                        <div className="flex space-x-2 items-start mt-8">
                          <span>
                            <svg
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <div className="flex flex-col space-y-1">
                            <span className="font-semibold">{item.title}</span>
                            <span>{item.descp}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;

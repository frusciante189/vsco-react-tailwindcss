import React from "react";

const Tools = () => {
  return (
    <>
      <div className="bg-black w-full flex flex-col items-center justify-start py-20">
        <h1 className="text-white lg:text-3xl text-lg">
          Creative tools, inspiration, and a place for you to be you.
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8 py-20">
          <div className="flex text-white flex-col space-y-5 lg:w-7/12 w-full">
            <div className="flex items-center justify-start">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Tools</title>
                  <g fill="#fff" fill-rule="evenodd" transform="translate(1 3)">
                    <rect width="11" height="2" y="3"></rect>
                    <rect width="5" height="2" x="17" y="3"></rect>
                    <polygon points="11 13 22 13 22 15 11 15"></polygon>
                    <rect width="5" height="2" y="13"></rect>
                    <path
                      fill-rule="nonzero"
                      d="M14 6C15.1045695 6 16 5.1045695 16 4 16 2.8954305 15.1045695 2 14 2 12.8954305 2 12 2.8954305 12 4 12 5.1045695 12.8954305 6 14 6zM14 8C11.790861 8 10 6.209139 10 4 10 1.790861 11.790861 0 14 0 16.209139 0 18 1.790861 18 4 18 6.209139 16.209139 8 14 8zM8 16C9.1045695 16 10 15.1045695 10 14 10 12.8954305 9.1045695 12 8 12 6.8954305 12 6 12.8954305 6 14 6 15.1045695 6.8954305 16 8 16zM8 18C5.790861 18 4 16.209139 4 14 4 11.790861 5.790861 10 8 10 10.209139 10 12 11.790861 12 14 12 16.209139 10.209139 18 8 18z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="font-bold text-lg ml-3">Create</span>
            </div>
            <p className="text-lg">
              Photo and video tools for creators, by creators.
            </p>
          </div>
          <div className="flex text-white  flex-col space-y-5 lg:w-7/12 w-full">
            <div className="flex items-center justify-start">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Discover</title>
                  <g fill="#fff" fill-rule="evenodd" transform="translate(1 1)">
                    <path d="M11,0 C4.92525,0 0,4.92525 0,11 C0,17.07475 4.92525,22 11,22 C17.07475,22 22,17.07475 22,11 C22,4.92525 17.07475,0 11,0 M11,2 C15.9626,2 20,6.0374 20,11 C20,15.9626 15.9626,20 11,20 C6.0374,20 2,15.9626 2,11 C2,6.0374 6.0374,2 11,2"></path>
                    <path
                      fill-rule="nonzero"
                      d="M11,20.3076923 C12.4911688,20.3076923 13.7,16.1404965 13.7,11 C13.7,5.85950348 12.4911688,1.69230769 11,1.69230769 C9.50883118,1.69230769 8.3,5.85950348 8.3,11 C8.3,16.1404965 9.50883118,20.3076923 11,20.3076923 Z M11,22 C7.89390298,22 6.5,17.1948074 6.5,11 C6.5,4.80519259 7.89390298,0 11,0 C14.106097,0 15.5,4.80519259 15.5,11 C15.5,17.1948074 14.106097,22 11,22 Z"
                    ></path>
                    <polygon
                      fill-rule="nonzero"
                      points="2.049 9 20.228 9 20.228 7 2.049 7"
                    ></polygon>
                    <polygon
                      fill-rule="nonzero"
                      points="2.049 15 20.228 15 20.228 13 2.049 13"
                    ></polygon>
                  </g>
                </svg>
              </span>
              <span className="font-bold text-lg ml-3">Discover</span>
            </div>
            <p className="text-lg">
              A place to discover new perspectives and share your own.
            </p>
          </div>
          <div className="flex text-white flex-col space-y-5 lg:w-7/12 w-full">
            <div className="flex items-center justify-start">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Feed</title>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M12,1 C5.92525,1 1,5.92525 1,12 C1,18.07475 5.92525,23 12,23 C18.07475,23 23,18.07475 23,12 C23,5.92525 18.07475,1 12,1 M8,20.0613233 L8,3.93867665 C8.92186432,3.47938997 9.93309986,3.17365831 11,3.0551883 L11,20.9448117 C9.93309986,20.8263417 8.92186432,20.52061 8,20.0613233 Z M6,18.7027112 C4.15970331,17.0536354 3,14.659695 3,12 C3,9.34030504 4.15970331,6.94636465 6,5.29728876 L6,18.7027112 Z M16,3.93867665 L16,20.0613233 C15.0781357,20.52061 14.0669001,20.8263417 13,20.9448117 L13,3.0551883 C14.0669001,3.17365831 15.0781357,3.47938997 16,3.93867665 Z M18,5.29728876 C19.8402967,6.94636465 21,9.34030504 21,12 C21,14.659695 19.8402967,17.0536354 18,18.7027112 L18,5.29728876 Z"
                  ></path>
                </svg>
              </span>
              <span className="font-bold text-lg ml-3">Connect</span>
            </div>
            <p className="text-lg">
              Freedom from follower counts, comments, and ads.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;

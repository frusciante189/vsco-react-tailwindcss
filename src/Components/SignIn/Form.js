import React from "react";

const Form = () => {
  return (
    <div className="h-99 w-full flex items-center justify-center">
      <div className="flex items-center justify-center">
        <form className="w-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://assets.vsco.co/assets/images/icons/vsco-seal.svg"
                alt=""
                className="w-16 h-16 mb-8"
              />
              <span className="text-center w-full mt-1 mb-5 text-sm">
                Sign in to create, discover and connect <br /> with the global
                community.
              </span>
            </div>
          </div>
          <div className="w-3/4">
            <label className="">
              <input
                type="text"
                className="w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-600 mb-4"
                placeholder="Email or Profile name"
              />
            </label>
            <label className="">
              <input
                type="text"
                className="w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-600 mb-5"
                placeholder="Password"
              />
            </label>
            <a href="/" className="text-xs text-gray-500">
              I accept the <span className="text-[#ae995a]">Terms</span> &
              <span className="text-[#ae995a]"> Privacy Policy</span>
            </a>
          </div>
          <div className="pt-10 flex items-center justify-start space-x-8 w-3/4">
            <div className="flex flex-col uppercase text-gray-500 text-xs font-medium tracking-wider space-y-1.5">
              <a href="/" className="hover:text-black">
                Sign up - get the app
              </a>
              <a href="/" className="hover:text-black">
                Forgot Password
              </a>
            </div>
            <button className="bg-gray-200 px-8 py-3 text-sm font-semibold text-gray-500 rounded-sm">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

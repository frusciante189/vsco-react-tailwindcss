import React from "react";
import Navbar from "../Components/Home/Navbar";
import Form from "../Components/SignIn/Form";

const SignIn = () => {
  return (
    <>
      <Navbar
        btnBg="bg-white"
        btnTxt="text-black"
        btnBorderColor="border-black"
        bg="bg-white"
      />
      <Form />
    </>
  );
};

export default SignIn;

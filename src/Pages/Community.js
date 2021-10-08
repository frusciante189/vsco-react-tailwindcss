import React from "react";
import Featured from "../Components/Community/Featured";
import Forum from "../Components/Community/Forum";
import Header from "../Components/Community/Header";
import Recents from "../Components/Community/Recents";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const Community = () => {
  return (
    <>
      <Navbar
        btnBg="bg-black"
        btnTxt="text-white"
        bg="bg-[#F3B2BC]"
        btnBorder="border-transparent"
      />
      <Header />
      <Forum />
      <Recents />
      <Featured />
      <Footer />
    </>
  );
};

export default Community;

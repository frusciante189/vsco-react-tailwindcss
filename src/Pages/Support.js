import React from "react";
import Navbar from "../Components/Home/Navbar";
import Ask from "../Components/Support/Ask";
import FAQ from "../Components/Support/FAQ";
import Header from "../Components/Support/Header";
import Topics from "../Components/Support/Topics";
import Video from "../Components/Support/Video";
import Footer from "../Components/Home/Footer";

const Support = () => {
  return (
    <>
      <Navbar
        bg="bg-[#EDBB3A]"
        btnBg="bg-black"
        btnTxt="text-white"
        btnBorder="border-transparent"
      />
      <Header />
      <FAQ />
      <Topics />
      <Video />
      <Ask />
      {/* <Footer /> */}
    </>
  );
};

export default Support;

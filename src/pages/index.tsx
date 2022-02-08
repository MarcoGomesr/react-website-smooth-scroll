import React, { useState } from "react";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Info from "../components/Info";
import {
  HomeObjOne,
  HomeObjSecond,
  HomeObjThree,
} from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...HomeObjOne} />
      <Info {...HomeObjSecond} />
      <Services />
      <Info {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

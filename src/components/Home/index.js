import React from "react";

import Rank from "../Rank";

import Header from "../Header";

import SectionOne from "../SectionOne";

import SectionTwo from "../SectionTwo";

import SectionThree from "../SectionThree";

import SectionFour from "../SectionFour";

import SectionFive from "../SectionFive";

import SectionSix from "../SectionSix";

import SectionSeven from "../SectionSeven";

import SectionEight from "../SectionEight";

import SectionNine from "../SectionNine";

import { useEffect } from "react";

import axios from "axios";

import SectionTen from "../SectionTen";

import SectionEleven from "../SectionEleven";

import Footer from "../Footer";

const Home = () => {
  useEffect(() => {
    axios
      .get("http://192.168.1.85:8095/contacts")
      .then((res) => console.log(res));
  }, []);
  return (
    <div>
      <Rank />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <Footer />
    </div>
  );
};

export default Home;

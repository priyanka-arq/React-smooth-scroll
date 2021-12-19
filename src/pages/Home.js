import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { FaDivide } from "react-icons/fa";
import { useState } from "react";
import MainSection from "../components/mainSection/MainSection";
import InfoSection from "../components/infoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import Enrol from "./enrol/Enrol";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toogle={toogle} />
      <Sidebar isOpen={isOpen} toogle={toogle} />
      <MainSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Footer />
    </div>
  );
}

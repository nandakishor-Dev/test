import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrowseSection from "../components/BrowseSection";
import OurProducts from "../components/OurProducts";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrowseSection/>
      <OurProducts/>
    </>
  );
}

export default Home;

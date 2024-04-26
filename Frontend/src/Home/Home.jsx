import React from 'react'
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Slides from '../components/Slides';
import Department from '../components/Department';
import Footer from "../components/Footer";

function Home() {
  return ( <>
  
      <Navbar />
      <Body />
      <Slides />
      <Department />
      <Footer />
    </>
  )
}

export default Home

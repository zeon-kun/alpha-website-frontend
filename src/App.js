import React from "react";
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import LandingPage from "./Components/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <div className="bg-teal-500">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </>
  )
};

export default App;

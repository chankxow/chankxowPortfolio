import React from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Activity from "./components/Activity";
import Certificate from "./components/Certificate";
import Popup from './components/Popupimg'
const App = () => {
  return (
    <div className="grid bg-ac bgAnimation bg-no-repeat overflow-hidden bg-cover">
      <Banner />
      <div>
        <About />
        <Project />
        <Activity />
        <Certificate />
        <Nav />
        <div className="h-[4000px]"></div>
        <Popup/>
      </div>
    </div>
  );
};

export default App;

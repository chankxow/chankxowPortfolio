import React from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
const App = () => {
  return (
    <div className='grid bg-ac bgAnimation bg-no-repeat overflow-hidden bg-cover'>
    <Banner/>
    <div>
      <About/>
      <Activity/>
      <Project/>
      <Certificate/>
      <Contact/>
      <Nav/>
      <div className='h-[4000px]'>

      </div>
      </div>
      </div>
  );
};

export default App;

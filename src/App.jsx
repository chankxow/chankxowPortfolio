import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Activity from "./components/Activity";
import Certificate from "./components/Certificate";
import Footer from './components/footer'
import Gal from './components/Gallery'
const App = () => {
  return (
    <div className=" box-border mx-auto flex-col bg-no-repeat overflow-hidden">
      <Banner />
        <div>
          <About />
          <Project />
          <Activity />
          
          <Certificate />
          <Nav />
          <div className="h-[200px]"></div>
          <Gal/>
          <Footer/>
        
      </div>
    </div>
  );
};

export default App;

import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Activity from "./components/Activity";
import Certificate from "./components/Certificate";
const App = () => {
  return (
    <div className=" box-border mx-auto flex-col bg-no-repeat overflow-hidden">
      <Banner />
      <div className="">
        <div>
          <About />
          <Project />
          <Activity />
          <Certificate />
          <Nav />
        </div>

        <div className="h-[200px]"></div>
      </div>
    </div>
  );
};

export default App;

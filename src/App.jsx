import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setIsTopOfPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="mt-10">
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>{" "}
      <div className="mt-10">
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>
      <div className="mt-10">
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto h-full">
        <Testimonial />
      </div>
      <div className="mt-10">
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
export default App;

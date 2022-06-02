import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import JoinUs from "../../pages/JoinUs";
import SingleJoinUs from "../../pages/SingleJoinUs";
import Services from "../../pages/Services";
import Nav from "./Nav";
import Footer from "../footer/Footer";
import Management from "../management/Management";
import Privacynotice from "../privacyNotice/Privacynotice";
import CaseStudy from "../caseStudy/CaseStudy";
import Benefits from "../benefits/Benefits";
import Overview from "../overview/Overview";



const Navbar = () => { 
  return (
    <>
      <Nav />
      <Routes>
        <Route exact  path="/about" element={<About />} />
        <Route exact  path="/contact" element={<Contact />} />
        <Route exact  path="/joinus" element={<JoinUs />} />
        <Route exact  path="/joinus/:id" element={<SingleJoinUs />} />
        <Route exact  path="/services" element={<Services />} />
        <Route exact  path="/privacynotice" element={<Privacynotice />} />
        <Route exact  path="/overview" element={<Overview />} />
        <Route exact  path="/benefits" element={<Benefits />} />
        <Route exact  path="/casestudy" element={<CaseStudy />} />
        {/* <Route exact  path="/card" element={<Card />} />
        <Route exact  path="/card/:id" element={<SingleCard />} /> */}
        <Route exact  path="/management" element={<Management />} />
        <Route exact  path="/footer" element={<Footer />} />
        <Route exact  path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Navbar;

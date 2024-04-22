import { Route, Routes } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact/";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;

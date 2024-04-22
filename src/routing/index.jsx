import { Route, Routes } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact/";
import UsersWithReducerPage from "../page/UsersWithReducer";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users-reducer" element={<UsersWithReducerPage />} />

      </Routes>
    </>
  );
};

export default Routing;

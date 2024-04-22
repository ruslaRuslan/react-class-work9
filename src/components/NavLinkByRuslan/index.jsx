import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const NavLinkByRuslan = ({ title, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.link : null)}
      >
        {title}
      </NavLink>
    </>
  );
};

export default NavLinkByRuslan;

import nav from "../Style/nav.module.css";
import navimage from "../Image/navimage.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Linkwrapper = styled(Link)`
  text-decoration: none;
  color: red;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: underline;
    /* background-color: black; */
  }
`;
const Nabvar = () => {
  return (
    <div className={nav.navbar}>
      <div className={nav.navlinks}>
        <div className={nav.logo}>
          <img src={navimage} alt="logo" style={{ width: "40px" }} />
          <sub style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            Caliper pvt. Ltd
          </sub>
        </div>
        <div className={nav.links}>
          <div>
            {" "}
            <Linkwrapper to="/">Home</Linkwrapper>
          </div>
          <div>
            {" "}
            <Linkwrapper to="/service">Service</Linkwrapper>
          </div>
          <div>
            {" "}
            <Linkwrapper to="/contact">Contact Us</Linkwrapper>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export { Nabvar };

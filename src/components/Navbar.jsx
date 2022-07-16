import nav from "../Style/nav.module.css";
import navimage from "../Image/navimage.png";

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
          <div>Home</div>
          <div>Shopping</div>
          <div>Contact Us</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};
export { Nabvar };

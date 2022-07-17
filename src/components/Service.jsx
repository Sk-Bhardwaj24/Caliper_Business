import React from "react";
import styles from "../Style/service.module.css";
import ser7 from "../Image/ser7.jpeg";
import ser8 from "../Image/ser8.jpeg";
import ser9 from "../Image/ser8.jpeg";

import Project from "./Project";
const Service = () => {
  return (
    <div className={styles.sec}>
      <div className={styles.s1}>
        <h1>Our Standard Commercial Models</h1>
        <p>
          Every Space has its own features. In this regard, Rise Hydroponics
          gives you a flexibility to assess the models that work best for you.
        </p>
        <p>
          All of our customers can choose from these outdoor hydroponics models
          and Rise Hydroponics will set up the farm as per the types of systems
          described below:
        </p>
        <div className={styles.s1D}>
          {" "}
          <div className={styles.s1d}>
            <p>560 </p>
            <h4>SQM</h4>
          </div>
          <div className={styles.s2d}>
            {" "}
            <p>1056 </p>
            <h4>SQM</h4>
          </div>
          <div className={styles.s3d}>
            {" "}
            <p>150 </p>
            <h4>SQM</h4>
          </div>
          <div className={styles.s4d}>
            {" "}
            <p>2000 </p>
            <h4>SQM</h4>
          </div>
          <div className={styles.s5d}>
            {" "}
            <p>2600 </p>
            <h4>SQM</h4>
          </div>
          <div className={styles.s6d}>
            {" "}
            <p>1 </p>
            <h4>ACRE</h4>
          </div>
        </div>
      </div>
      <div className={styles.ss1}>
        <h1 className={styles.sec1}>Our Process</h1>
        <p className={styles.ssp}>
          From Site Assessment to installing state-of –the-art-technologies And
          from raising full grown crops to branding and sales, Caliper Business
          Supports Hydroponics project of all sizes and types.
        </p>
        <p className={styles.ssp}>Want a Sneak Peek ?</p>
        <p className={styles.ssp}>
          Come, Let’s take up each activity and progress further.
        </p>
      </div>
      <div className={styles.ss1}>
        <h2 className={styles.sec1} style={{ textAlign: "left" }}>
          Feasibility Study
        </h2>
        <div className={styles.ss2}>
          <div>
            <img src={ser7} alt="farming" />
            <h2 className={styles.sec1}> Site Feasibility</h2>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              {" "}
              Grow crops successfully
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Farm forecasting for better performance & ROI
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Area Study & Market Research
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Equipment to grow crops
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Sales & Marketing Support
            </p>
          </div>
          <div>
            <img src={ser8} alt="farming" />
            <h2 className={styles.sec1}>Financial Feasibility</h2>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              {" "}
              Study Locality
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Land Levelling
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Examine Electricity & Water Availability
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Material Required to setup farm
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Make suitable structure for your commercial farm
            </p>
          </div>

          <div>
            <img src={ser8} alt="farming" />
            <h2 className={styles.sec1}>Technical Feasibility</h2>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              {" "}
              IoT Automation
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Irrigation and Fertigation Unit
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Training to manage EC, pH, TDS, etc.
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Climate control management
            </p>
            <p className={styles.ssp} style={{ marginLeft: "15px" }}>
              Crop cycle management training
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ssh}>
        <h1 className={styles.sec1}>Project Design</h1>
        <div className={styles.ssh2}>
          <div className={styles.sps1}>
            <h3>Orientation</h3>
            <p className={styles.sssp}>
              The orientation of the farm is a solution involving wind
              direction, location flexibility, and temperature control type. The
              Farm design should be based on scientific principles that allow
              for a protected environment for plant development.
            </p>
          </div>
          <div className={styles.sps2}>
            <h3>Wind Effects</h3>
            <p className={styles.sssp}>
              The polyhouse structure should be able to withstand the wind
              velocity of 110 km/h to avoid the future damage and to enable
              adequate structural safety.
            </p>
          </div>
          <div className={styles.sps3}>
            <h3>Polyhouse Structure Design</h3>
            <p className={styles.sssp}>
              The components like size, spacing, height and materials used for
              the polyhouse structure must be designed specifically to ensure
              the required standards of safety, functionality, structural
              stability, and compatibility of the farm.
            </p>
          </div>
          <div className={styles.sps4}>
            {" "}
            <h3>Irrigation and Fertigation System Installation</h3>
            <p className={styles.sssp}>
              The Automatic Dosing System (ADS) is installed for the real time
              nutrition measurement and provides the exact amount of nutrition
              rich solution directly to the roots of the crop to get a
              productive yield with less effort.
            </p>
          </div>
          <div className={styles.sps5}>
            {" "}
            <h3>Crop Selection</h3>
            <p className={styles.sssp}>
              Crop selection is mainly driven by the market demand and
              Prioritizing output that is focused on superior quality by
              combining practical experience with cutting-edge scientific
              technology.
            </p>
          </div>
          <div className={styles.sps6}>
            {" "}
            <h3>Expert Consultation</h3>
            <p className={styles.sssp}>
              Consultancy support will be provided to understand the current
              scenario, future prospects, investment, ROI, and other relevant
              things regarding modern farming technique with our experienced
              industry experts.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* <p className={styles.ssp}></p> */}
      <Project />
    </div>
  );
};

export default Service;

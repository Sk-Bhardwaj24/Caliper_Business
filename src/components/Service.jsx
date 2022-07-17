import React from "react";
import styles from "../Style/service.module.css";
import ser7 from "../Image/ser7.jpeg";
import ser8 from "../Image/ser8.jpeg";
import ser9 from "../Image/ser8.jpeg";
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
        </div>
      </div>
      <p className={styles.ssp}></p>
    </div>
  );
};

export default Service;

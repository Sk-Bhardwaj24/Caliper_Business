import React from "react";
import styles from "../Style/project.module.css";
import service from "../Style/service.module.css";
import sec16 from "../Image/sec16.jpeg";
import sec17 from "../Image/sec17.jpeg";
import sec18 from "../Image/sec18.jpeg";

import sec19 from "../Image/sec19.jpeg";
import sec20 from "../Image/sec21.jpeg";
import sec21 from "../Image/sec20.jpeg";
import sec22 from "../Image/sec22.jpeg";

const Project = () => {
  return (
    <div className={styles.pro}>
      <div className={styles.pr1}>
        <h1 className={service.sec1}>Our Projects</h1>
        <h2 className={service.sec1} style={{ textAlign: "left" }}>
          Polyhouse Structure Development
        </h2>
        <p className={service.ssp}>
          {" "}
          caliper Business has shown extraordinary results in setting up poly
          house structures for hydroponics-based farms. Based on particular
          requirements and criteria, two distinct types of temperature
          controlled polyhouse structures are being developed for hydroponics
          farming.
        </p>
        <div className={styles.pr1d}>
          <div>
            <img src={sec16} alt="farming" />
          </div>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              Fan & Pad temperature controlled Polyhouse structure{" "}
            </h2>
            <p className={service.ssp}>
              Fan & Pad polyhouse is used to control the temperature and
              humidity of the farm as plants require an optimum conditions for
              maximum yield and quality.The internal temperature of the farm can
              be controlled with these fans and pads.
            </p>
            <p className={service.ssp}>
              We install sensors on your farm to monitor and control the farm
              temperature, water temperature, humidity, electrical conductivity,
              pH, TDS, etc. This will help you in better assessment of various
              parameters of your farm.
            </p>
          </div>
        </div>{" "}
        <div className={styles.pr2d}>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              Naturally Ventilated Polyhouse Structure
            </h2>
            <p className={service.ssp}>
              The Naturally Ventilated Polyhouse is developed to solve the
              challenges of ventilation and humidity by achieving optimum air
              exchange while also reducing energy costs utilizing environmental
              controls.
            </p>
            <p className={service.ssp}>
              Roofs with specialised features are designed to shed rain and
              Increases crop production by providing suitable controlled
              environment and other parameters such as temperature, humidity,
              ventilation, irrigation, Fertigation, and integrated pest
              management are monitored and controlled throughout the season.
            </p>
          </div>
          <div>
            <img src={sec17} alt="farming" />
          </div>
        </div>
        <div className={styles.pr1d}>
          <div>
            <img src={sec18} alt="farming" />
          </div>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              NFT ( Nutrient Film Technique )
            </h2>
            <p className={service.ssp}>
              NFT system or the nutrient film technique is one of the most
              versatile and popular hydroponics systems that use a pump for
              delivering nutrients & water to the crops. There is also a drain
              pipe for recycling unused nutrient rich solutions.
            </p>
            <p className={service.ssp}>
              We at Caliper Business use UPVC pipes that cause no harm to the
              crops and allow them to grow healthily. It is highly suited to
              grow exotic and Indian leafy green crops such as lettuce,
              broccoli, spinach, bok choy, basil, etc.
            </p>
          </div>
        </div>{" "}
        {/* ************ */}
        <div className={styles.pr2d}>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              Deep Water Culture
            </h2>
            <p className={service.ssp}>
              In Deep Water Culture the roots are kept in the nutrient-rich
              solution water for 24/7. This system is highly suited for large
              crops or especially for those with big roots. This system is not
              so costly & less complicated to use.
            </p>
            <p className={service.ssp}>
              In this you can grow crops like head lettuce, kale, okra, large
              leafy greens, etc.
            </p>
          </div>
          <div>
            <img src={sec19} alt="farming" />
          </div>
        </div>{" "}
        <div className={styles.pr1d}>
          <div>
            <img src={sec20} alt="farming" />
          </div>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              Dutch Bucket
            </h2>
            <p className={service.ssp}>
              Dutch bucket or say Bato bucket system are extremely popular and
              can be easily installed for any indoor or outdoor hydroponics
              farm.
            </p>
            <p className={service.ssp}>
              This method helps to grow all vine crops and bushy crops.
            </p>
          </div>
        </div>{" "}
        {/* ****************** */}
        <div className={styles.pr2d}>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              Irrigation and Fertigation system
            </h2>
            <p className={service.ssp}>
              Fertigation is the method to supply nutrients to the plants with
              the help of autodoser.
            </p>
            <p className={service.ssp}>
              The nutrients rich water is directly delivered to the roots of the
              plants as per the specific plant’s requirement to get the superior
              quality crop yield in half time.
            </p>
          </div>
          <div>
            <img src={sec21} alt="farming" />
          </div>
        </div>{" "}
        {/* ****************** */}
        <div className={styles.pr1d}>
          <div>
            <img src={sec22} alt="farming" />
          </div>
          <div>
            <h2 className={service.sec1} style={{ textAlign: "left" }}>
              IoT Automation
            </h2>
            <p className={service.ssp}>
              IoT Automation helps you to connect with your farm easily &
              operate it from wherever you are. It helps you to save time and
              avoid errors while growing crops.
            </p>
            <p className={service.ssp}>
              It is utilised to transmit the retrieved data from the sensors
              places in the farm to the internet , and a mobile app is used to
              convey the current status of the farm to the operator through the
              internet to their mobile phones, allowing for simpler monitoring
              and managing the optimum conditions of your farm.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Project;

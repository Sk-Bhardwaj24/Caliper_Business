import React from "react";
import styles from "../Style/contact.module.css";
const Contact = () => {
  return (
    <div className={styles.cd1}>
      <div className={styles.con1}>
        <h1 className={styles.ch1}>
          HYDROPONIC FARMING! GET YOUR OWN FARM NOW!
        </h1>

        <div>
          <h3 className={styles.ch3}>Get in touch with us.</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Contact No." />
          <input type="text" placeholder="Your City" />
          <input type="text" placeholder="Size of Land" />
          <textarea placeholder="Comments" className={styles.txt1} />
          <br />
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

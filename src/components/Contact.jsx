import React from "react";

import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
    <div className={styles.Contact_parent}>
      <div className={styles.Contact_subParent}>
        <div className={styles.Contact_section}>
          <p className={styles.Contact_header}>Connect me on...</p>
          <hr className={styles.Contact_hr}></hr>
        </div>
        <div className={styles.Contact_socialWrapper}>
          <div className={styles.Contact_social}>
            <a href="https://www.linkedin.com/in/gulshaba-parveen/" target={"blank"} id="contact-linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className={styles.Contact_social}>
            <a href="https://www.instagram.com/gulshaba_parveen/" target={"blank"} id="contact-instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className={styles.Contact_social}>
            <a href="mailto:gulshabaparveen1@gmail.com" target={"blank"} id="contact-email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className={styles.Contact_social}>
            <a href="tel:+91-8861013874" target={"blank"} id="contact-phone">
              <i className="fa-solid fa-phone"></i>

            </a>
          </div>
          <div className={styles.Contact_social}>
            <a href="https://github.com/Gulshaba-Parveen" target={"blank"} id="contact-github">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

        </div>


      </div>
    </div>


       <div className={styles.MadeWithLove}>
        <motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Infinity, 
              repeatType: "reverse", 
              staggerChildren: 2,
              delayChildren: 2 
            }}
          >
            {"MADE WITH ❤️ BY GULSHABA".split("").map((letter, index) => (
              <motion.span key={index}>{letter}</motion.span>
            ))}
          </motion.span>
        </motion.h1>
      </div>
</>
  );
};

export default Contact;


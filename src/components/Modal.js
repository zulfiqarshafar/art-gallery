import React from "react";
import { motion } from "framer-motion";
import * as styles from "./Modal.module.scss";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains(styles.backdrop)) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Enlarged image"
        initial={{ y: "-10vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default Modal;

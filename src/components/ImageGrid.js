import React from "react";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";
import * as styles from "./ImageGrid.module.scss";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className={styles.imageGrid}>
      {docs &&
        docs.map((img) => (
          <motion.div
            className={styles.imageWrap}
            key={img.id}
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(img.url)}
          >
            <motion.img
              src={img.url}
              alt={img.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;

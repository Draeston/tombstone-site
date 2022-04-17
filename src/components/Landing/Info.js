import styles from "../../assets/styles/Landing/Info.module.css";
import React from "react";

export function Info({ text, isReverted = true, image }) {
  return (
    <div className={styles.info}>
      {isReverted ? (
        <React.Fragment>
          <span className={styles.infoTextRight}>{text}</span>
          <div className={styles.imgWrapper}>
            <img
              className={styles.tombImg}
              src={require(`../../assets/images/Landing/Info/${image}`)}
              alt=""
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={styles.imgWrapper}>
            <img
              className={styles.tombImg}
              src={require(`../../assets/images/Landing/Info/${image}`)}
              alt=""
            />
          </div>
          <span className={styles.infoText}>{text}</span>
        </React.Fragment>
      )}
    </div>
  );
}

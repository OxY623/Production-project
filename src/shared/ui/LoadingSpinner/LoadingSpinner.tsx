import * as styles from "./LoadingSpinner.module.scss";
import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles["lds-grid"]}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default LoadingSpinner;

import * as styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
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

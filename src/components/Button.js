import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  const { buttonTitle } = props;
  return <a className={styles.button}>{buttonTitle}</a>;
};

export default Button;

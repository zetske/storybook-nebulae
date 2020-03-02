import React from "react";
import styles from "./Button.module.css";

export const Button = props => {
  const { buttonTitle, ...rest } = props;
  return <a className={styles.button} {...rest}>{buttonTitle}</a>;
};
import React from "react";
import styles from "./Flex.module.css";

export class Flex extends React.Component {
  render() {
    return <div className={styles.flex}>{this.props.children}</div>;
  }
}
import React from "react";
import styles from "./Box.module.css";

class ContentBox extends React.Component {
  render() {
    const { title, tag, src } = this.props;
    return (
      <div className={styles.boxLayout}>
        <img src={src} alt="" />
        <h3 className={styles.title}>
          <span>{title}</span>
        </h3>
        <p className={styles.tag}>{tag}</p>
      </div>
    );
  }
}

export default ContentBox;

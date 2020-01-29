import React from "react";
import styles from "./TopSnippet.module.css";

class TopSnippet extends React.Component {
  render() {
    const { title, tag, article } = this.props;
    return (
      <div className={styles.topSnippet}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.tag}>{tag}</h3>
        <p className={styles.article}>{article} ... <span className={styles.span}>more</span></p>
        
      </div>
    );
  }
}

export default TopSnippet;
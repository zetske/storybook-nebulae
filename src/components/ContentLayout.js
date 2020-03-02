import React from "react";
import { ContentBox } from "./ContentBox";
import styles from "./ContentLayout.module.css";

export class ContentLayout extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.layout}>
        {data.map(item => (
          <ContentBox src={item.src} tag={item.tag} title={item.title} />
        ))}
      </div>
    );
  }
}
import React from "react";
import TopSnippet from "../components/TopSnippet";
import styles from "../components/TopSnippet.module.css";

export function TopSnippetStory() {
  return (
    <div>
      <TopSnippet
        className={styles.topSnippet}
        title = {"Significance of Breastfeeding"}
        tag = {"Today's Inspiration"}
        article= {"Whenever we examine our lives, we examine them from a particular side or angle. Most of us tend to favor one side over the others. For example, we may tend to look at things from an emotional perspective rather than a financial perspective, or we may"}
      />
    </div>
  );
}

const StoryForTopSnippet = {
  title: "Top Snippet",
  component: TopSnippet,
};

export default StoryForTopSnippet;
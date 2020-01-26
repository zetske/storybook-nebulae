import React from "react";
import ContentBox from "../components/Box";

// Story 1
export function BoxOne() {
  return (
    <ContentBox
      title="ABC of Emotional Development"
      tag="Inspiration"
      src="https://images.unsplash.com/photo-1504484440176-4f89a392c862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&h=290&q=60"
    />
  );
}

// Story 2
export function BoxTwo() {
  return (
    <ContentBox
      title="Significance of Breastfeeding"
      tag="Inspiration"
      src="https://images.unsplash.com/photo-1499638892001-25bdfe0bba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
    />
  );
}

// Story 3
export function BoxThree() {
  return (
    <ContentBox
      title="Developmental Milestones"
      tag="Inspiration"
      src="https://images.unsplash.com/photo-1559806794-3815a1436278?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
    />
  );
}

const StoryForBox = {
  title: "Box",
  component: ContentBox
};

export default StoryForBox;

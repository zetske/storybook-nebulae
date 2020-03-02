import React from "react";
import { ContentLayout } from "../components/ContentLayout";
import styles from "../components/ContentLayout.module.css";

const inspireData = [
  {
    title: "ABC of Emotional Development",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504484440176-4f89a392c862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Significance of Breastfeeding",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1499638892001-25bdfe0bba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Developmental Milestones",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1559806794-3815a1436278?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "The currency of Love Is Time",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504489969124-eb0e46a5f482?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Preparing The Uterus For Pregnancy",
    tag: "Inspiration",
    src:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Dynamic Relationships As The Newborn",
    tag: "Inspiration",
    src:
      "https://images.unsplash.com/photo-1527712337080-da9f28bb177a?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Ideal Environment For The Newborn",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504486739753-9694b535f54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Your Child Impulse Control",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1495131292899-bc096577e8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  }
];

const courseData = [
  {
    title: "Language Development For 3 to 6 year olds",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1507077630565-b23bbbe732ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Your Child Impulse Control",
    tag: "7 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1502338425440-7bf57557e2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Boundaries In 10 Steps",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1509676468933-c98e51205cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "21 Developmental Milestones",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1505692069463-edfaea445fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "ABC of Emotional Development",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1557172955-5c0491a20970?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Potty Training Made Easy",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1507098092992-fc64b4ac7072?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Manifest Good Habits Every Day",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1471199336425-8966ccc0a907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=550&h=290&q=60"
  }
];

export function pageDemonstration() {
  return (
    <div>
      <ContentLayout className={styles.inspirationColumn} data={inspireData} />
      <ContentLayout className={styles.coursesColumn} data={courseData} />
    </div>
  );
}

const StoryForContentLayout = {
  title: "ContentLayout",
  component: ContentLayout
};

export default StoryForContentLayout;

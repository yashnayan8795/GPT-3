import React from "react";
import { useState } from "react";
import {Article} from "../../components/index"
import {blog01,blog02,blog03,blog04,blog05} from './import'
import "./blog.css";
import { motion,useViewportScroll, useTransform } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Blog = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Use useState
  const { scrollY } = useViewportScroll();
  const scrollPosition = useTransform(scrollY, (y) => y);
  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <motion.div className="gpt3__blog-heading"  variants={container}
        initial={hasAnimated ? 'show' : 'hidden'}
        animate={hasAnimated ? 'show' : 'hidden'}
        whileInView={handleInView}>
        <h1 className="gradient__text">
        <motion.div variants={item}>❝ A lot is happening,</motion.div>
         <motion.div variants={item}>We are blogging about it.❞</motion.div>
        </h1>
      </motion.div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 15, 2023" text="How GPT models work: accessible to everyone" bloglink="https://bea.stollnitz.com/blog/how-gpt-works/"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="March 19, 2024" text="Apple Is in Talks to Let Google Gemini Power iPhone AI Features" bloglink='https://www.bloomberg.com/news/articles/2024-03-18/apple-in-talks-to-license-google-gemini-for-iphone-ios-18-generative-ai-tools' />
        <Article imgUrl={blog03} date="April 9, 2024" text="OpenAI and Meta ready new AI models capable of Reasoning" bloglink="https://www.ft.com/content/78834fd4-c4d1-4bab-bc40-a64ad9d65e0d"/>
        <Article imgUrl={blog04} date="April 16, 2024" text="How Tech Giants Cut Corners to Harvest Data for A.I" bloglink="https://www.nytimes.com/2024/04/06/technology/tech-giants-harvest-data-artificial-intelligence.html" />
        <Article imgUrl={blog05} date="April 16, 2024" text="What is the Future with Artificial Intelligence for a Developer?" />
        </div>
      </div>
    </div>
  );
};
export default Blog;
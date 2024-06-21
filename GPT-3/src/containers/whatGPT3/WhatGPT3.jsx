import React from "react";
import { useState } from "react";
import { Feature } from "../../components/index";
import "./whatGPT3.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const WhatGPT3 = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Use useState
  const { scrollY } = useViewportScroll();
  const scrollPosition = useTransform(scrollY, (y) => y);
  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3, short for Generative Pre-trained Transformer 3, is a groundbreaking artificial intelligence language model. With an unprecedented scale of 175 billion parameters, GPT-3 is renowned for its ability to understand and generate human-like text in a wide range of contexts, from answering questions to generating creative stories, and even composing code. This model has revolutionized natural language processing and has vast implications for numerous industries, from education to healthcare, by enabling more sophisticated and versatile interactions between humans and machines."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p><a href="https://platform.openai.com/docs/libraries" target="_blank">Explore the Library</a></p>
      </div>
      <motion.div
        className="gpt3__whatgpt3-container"
        variants={container}
        initial={hasAnimated ? "show" : "hidden"}
        animate={hasAnimated ? "show" : "hidden"}
        whileInView={handleInView}
      >
        <motion.div variants={item}>
          <Feature
            title="Chatbots"
            text="Automated conversational agents designed to simulate human interaction, offering assistance, information, and engagement across various platforms."
          />
        </motion.div>
        <motion.div variants={item}>
          <Feature
            title="Knowledgebase"
            text="Vast repository of information and context that the model has been trained on, enabling it to generate responses and solutions based on its learned knowledge"
          />
        </motion.div>
        <motion.div variants={item}>
          <Feature
            title="Education"
            text="Leveraging the model's capabilities to facilitate learning by providing personalized tutoring, generating educational content, and aiding in research tasks."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default WhatGPT3;
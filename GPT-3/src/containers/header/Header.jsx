import React from "react";
import "./header.css";
import people from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";
import Typist from "react-typist";
import { motion } from "framer-motion";
const dullBrightVariant = {
  dull: { opacity: 0.2 },
  bright: { opacity: 2 },
};
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <div className="typing-container">
          <Typist>
            <h1 className="gradient__text">
              Unveiling the Power of GPT Models, Exploring the Realm of AI"
            </h1>
          </Typist>
        </div>
        <p>
          Discover the transformative capabilities of Artificial Intelligence
          (AI) and GPT (Generative Pre-trained Transformer) technology on our
          webpage. Delve into their profound impact on industries,
          communication, and the future of technology & Test out the Model.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={people}
            alt="people"
            className="glow"
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={dullBrightVariant}
          initial="dull"
          animate="bright"
          transition={{ duration: 0.2, yoyo: Infinity }}
          src={ai}
          alt="ai"
          className="glow"
        />
      </div>
    </div>
  );
};
export default Header;
import React from "react";
import { useEffect } from "react";
import { Feature } from "../../components/index";
import "./feature.css";
import Aos from "aos";
import "aos/dist/aos.css";
const featuresData = [
  {
    title: "Smart Assistance Everywhere",
    text: "Experience seamless integration of AI-driven assistance across devices, from your smartphone to your smart home, enhancing productivity and convenience in everyday tasks.",
  },
  {
    title: "Personalized Recommendations",
    text: "Unlock tailored suggestions and recommendations based on your preferences and habits, revolutionizing how you discover content, products, and services.",
  },
  {
    title: "Empowering Communication",
    text: "Break language barriers and enhance communication with real-time language translation, enabling global collaboration and fostering meaningful connections",
  },
  {
    title: "Innovative Content Creation",
    text: "Unleash your creativity with AI-powered tools for content creation, streamlining the process and inspiring new possibilities in writing, design, and multimedia production.  ",
  },
];
const Features = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading" data-aos="zoom-in-right">
        <h1 className="gradient__text" >
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container"
       data-aos="flip-left"
       data-aos-anchor-placement="bottom-bottom"
       data-aos-easing="ease-out-linear"
       >
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};
export default Features;
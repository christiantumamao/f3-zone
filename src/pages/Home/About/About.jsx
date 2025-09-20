import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gym1 from "../../../assets/10.jpeg";
import gym2 from "../../../assets/2.jpeg";
import gym3 from "../../../assets/gym1.jpg";
import gym4 from "../../../assets/12.jpeg";
import "./About.css";

function About({ n1, n2, n3 }) {
  const [mainContent, setMainContent] = useState({
    img: gym3,
    title: n1,
    text: `At ${n2}, ${n3}`,
  });

  const gallery = [
    { img: gym1, title: n1, text: `At ${n2}, ${n3}` },
    {
      img: gym2,
      title: "Expert Trainers",
      text: "Our certified trainers are here to guide you every step of the way.",
    },
    {
      img: gym1,
      title: "Modern Equipment",
      text: "We provide state-of-the-art equipment designed for all fitness levels.",
    },
    {
      img: gym4,
      title: "Community Support",
      text: "Join a vibrant community that inspires you to become your best self.",
    },
  ];

  return (
    <section className="about" id="about">
      
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1>About Us</h1>
        <p>
          Discover who we are, what we stand for, and how we help you achieve
          your fitness goals.
        </p>
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-main-img"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={mainContent.img}
              src={mainContent.img}
              alt="About Main"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </motion.div>

        
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mainContent.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2>{mainContent.title}</h2>
              <p>{mainContent.text}</p>
            </motion.div>
          </AnimatePresence>

          
          <motion.div
            className="about-gallery"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {gallery.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                className={item.img === mainContent.img ? "active" : ""}
                onClick={() =>
                  setMainContent({
                    img: item.img,
                    title: item.title,
                    text: item.text,
                  })
                }
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

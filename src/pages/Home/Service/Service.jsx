import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Service.css";

import Taekwando from "../../../assets/ff.jpg";
import weightImg from "../../../assets/2.jpeg";
import Boxing from "../../../assets/4.jpeg";
import PowerHour from "../../../assets/f3.jpg";
import fitSteps from "../../../assets/OIP.jpeg";

function Service({ s1, s2 }) {
  const [activeId, setActiveId] = useState(null);

  const classes = [
    {
      id: 1,
      name: "Taekwondo",
      image: Taekwando,
      desc: "Improve your flexibility, discipline, and confidence with Taekwondo training.",
    },
    {
      id: 2,
      name: "Weight Training",
      image: weightImg,
      desc: "Build muscle and strength with our modern gym equipment and expert coaching.",
    },
    {
      id: 3,
      name: "Boxing/Muay Thai",
      image: Boxing,
      desc: "Boost stamina, power, and defense skills through intense boxing sessions.",
    },
    {
      id: 4,
      name: "Power Hour",
      image: PowerHour,
      desc: "A high-energy fitness session designed to burn calories fast.",
    },
    {
      id: 5,
      name: "FitSteps",
      image: fitSteps,
      desc: "Dance-based workout combining fun and fitness for all levels.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: (i) => {
      const direction = i % 2 === 0 ? -50 : 50;
      return { opacity: 0, x: direction, y: 30 };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (i) => {
      const direction = i % 2 === 0 ? -50 : 50;
      return { opacity: 0, x: direction, y: 30 };
    },
  };

  return (
    <div className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2>{s1}</h2>
          <p>{s2}</p>
        </div>
        <motion.ul
          className="service-gallery"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {classes.map((classItem, index) => (
          <motion.li
          key={classItem.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.4 }}
          onClick={() =>
            setActiveId(activeId === classItem.id ? null : classItem.id)
          }
          animate={
            activeId === classItem.id
              ? { scale: 2.06, zIndex: 10, boxShadow: "0 18px 40px rgba(0,0,0,0.45)" }
              : { scale: 1, zIndex: 1, boxShadow: "5px 10px 15px rgba(0,0,0,0.4)" }
          }
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={activeId === classItem.id ? "active" : ""}
        >
          <img src={classItem.image} alt={classItem.name} />
          <div className="content">
            <span>
              <h2>{classItem.name}</h2>
              <p>{classItem.desc}</p>
            </span>
          </div>
        </motion.li>
        
         
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Service;

import React, { useState, useEffect } from "react";
import { motion, scale } from "framer-motion";
import FloatVideo from "../../components/FloatVideo/FloatVideo.jsx";

import "./Home.css";

function Home({ name1, name2 }) {
  // List of backgrounds (images + video)
  const backgrounds = [
    { type: "video", src: "/image/28eec4cb-4921-4d5f-a7a2-adf5f4677f0c (1).mp4" },
    { type: "video", src: "/image/bde4f427-282e-4e21-bfb5-a5a327da1551.mp4" },
    { type: "video", src: "/image/c2ec743b-20c9-43a2-bbc8-6234479dd0a4.mp4" },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const [showFloat, setShowFloat] = useState(false);

  // Auto-change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  useEffect(() => {
    const interval = setInterval (() =>{
      setShowFloat (true);
      setTimeout(() => setShowFloat(false),30000);
    },10000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="hero">
      
      <div className="background-container">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={bg.src}
            className="background-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentItem ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            {bg.type === "image" ? (
              <img src={bg.src} alt={`bg-${index}`} />
            ) : (
              <video src={bg.src} autoPlay loop muted />
            )}
          </motion.div>
        ))}
      </div>

     
      <div className="overlay"></div>

     
      <div className="hero-content">
        <motion.h1
          className="motion-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {name1}
        </motion.h1>

        <motion.p
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {name2}
        </motion.p>
      </div>

      {showFloat && (
        <motion.div
          initial ={{opacity: 0, scale:0.8 }}
          animate ={{opacity: 1, scale: 1}}
          exit ={{opacity: 0, scale: 0.8}}
          transition ={{duration: 0.5}}
        >

      <FloatVideo src="/image/31963a7c-23c2-4d27-b725-c31466ce2b47.mp4" />
      </motion.div>
      )}
    </div>
  );
}

export default Home;

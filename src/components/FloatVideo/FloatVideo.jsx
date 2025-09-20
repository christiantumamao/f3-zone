import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FloatVideo.css";

function FloatVideo({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`floating-video ${isOpen ? "open" : "closed"}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      drag  
      dragConstraints={{ top: 0, left: 0, right: 300, bottom: 300 }} 
      dragElastic={0.2} 
    >
      {isOpen && (
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ❌
        </button>
      )}

      <video
        src={src}
        autoPlay
        loop
        muted={!isOpen}
        controls={isOpen}
        onClick={() => !isOpen && setIsOpen(true)}
      />
    </motion.div>
  );
}

export default FloatVideo;

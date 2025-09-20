import React from "react";
import { motion } from "framer-motion";
import "./Modal.css";

function BeforeModal({ post, onClose }) {
  if (!post) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="modal-title">{post.title}</h2>
        <div className="before-after">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Before</h4>
            <img src={post.beforeImage} alt="Before" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4>After</h4>
            <img src={post.afterImage} alt="After" />
          </motion.div>
        </div>
        <button className="close-btnn" onClick={onClose}>
          ✕ Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export default BeforeModal;

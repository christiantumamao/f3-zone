import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import f3 from "../../../assets/2.jpeg";
import food3 from "../../../assets/food3.jpg";
import BeforeModal from "../../../components/Modal/BeforeModal";

const posts = [
  {
    title: "Hot to Stay Fit at Home",
    excerpt: "Discover simple exercises you can do without equipment...",
    author: "Coach Den",
    date: "October 25, 2025",
    image: f3,
    beforeImage: "/image/now00.jpg",
    afterImage: "/image/now0.jpg",
  },
  {
    title: "Nutrition Tips for a Healthy Lifestyle",
    excerpt: "Learn how to balance your meals and stay energized...",
    author: "Coach Gail Amador",
    date: "November 5, 2025",
    image: food3,
    beforeImage: "/image/before55.jpg",
    afterImage: "/image/now55.jpg",
  },
  {
    title: "Top 5 Tips for Build your Body",
    excerpt: "Boost your workout with these amazing Tips..",
    author: "Coach Nova",
    date: "December 16, 2025",
    image: "/image/tips.jpg", 
    beforeImage: "/image/beforeF3.jpg",
    afterImage: "/image/nowF3.jpg",
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest Blogs</h2>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }} 
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
                onClick={() => setSelectedPost(post)} 
                style={{ cursor: "pointer" }}
              />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
      <BeforeModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}

export default Blog;

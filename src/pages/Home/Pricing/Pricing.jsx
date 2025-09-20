import React, { useEffect } from "react";
import { motion } from "framer-motion";  
import "./Pricing.css"; 

function Pricing({p1,p3}) {
  const plans = [
    { name: "Basic plan", price: "₱700/month", 
      features: ["Access to gym equipment", "1 Group Class per week", "Free Wifi"],
    },
    { name: "Standard plan", price: "₱1,500/month",
      features: ["All Basic features", "5 Group Classes per week", "1 Personal Training Session"],
    },
    { name: "Premium plan", price: "₱2,500/year",
      features: ["All Standard features", "Unlimited Classes", "Unlimited Personal Training"],
     },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Variants para sa  animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="pricing">
      <motion.div 
        className="pricing-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2>{p1}</h2>
        <p>{p3}</p>
      </motion.div>

      <div className="pricing-container">
        {plans.map((plan, i) => (
          <motion.div
            key={i}  
            className="pricing-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: i * 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 10px 30px rgba(255, 204, 0, 0.6)" 
            }}
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <p>{plan.name}</p>


            <ul>
              {plan.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 + idx * 0.1 }}
                  viewport={{ once: false }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

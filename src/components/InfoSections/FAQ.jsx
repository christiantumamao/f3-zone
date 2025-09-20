import { useState } from "react";
import "./InfoSections.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How do I sign up?",
      a: `To sign up, click the "JOIN NOW" button at the top-right,
          enter your email and password, and confirm your email.
          If you encounter any issues, contact support.`,
    },
    {
      q: "What are the prices and payment methods?",
      a: `We offer monthly and yearly plans. We accept major credit cards,
          GCash, and bank transfers. For details on current pricing, visit the Pricing page.`,
    },
    {
      q: "How do I cancel, and are refunds available?",
      a: `You can cancel your subscription under Account - Subscriptions.
          Depending on your plan, you may receive a prorated refund
          or no refund for a completed billing cycle — see our Refund Policy for specifics.`,
    },
    {
      q: "How can I get support?",
      a: `Send an email to F3zone@gmail.com or use the chat widget (lower-right)
          for quick assistance. For technical issues, please attach a screenshot and the error message.`,
    },
    {
      q: "What is your privacy policy?",
      a: `We protect your data and do not sell personal information.
          For full details, please see our Privacy Policy page.`,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3>FAQS</h3>
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <h4>{item.q}</h4>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;

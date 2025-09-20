


import "./Modal.css";
import { useState } from "react";
import api from "../../lib/axios.js"

  

function Modal({ title, description, onClose }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // grab values directly from the form
    const name = e.target.name.value;
    const email = e.target.email.value;
    const selectPlan = e.target.selectPlan.value;

    try {
      const res = await api.post(
        "/",
        { name, email, selectPlan },
       
      );

      console.log("Response:", res.data);
      alert("✅ User saved successfully!");
      onClose();
    } catch (error) {
      console.error( error.message);
      alert("❌ Error: " + (error.response?.data?.error || "Something went wrong"));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <select name="selectPlan" required>
            <option value="">Select option</option>
            <option value="Basic">Basic plan ₱700/month</option>
            <option value="Standard">Standard plan ₱1,500/month</option>
            <option value="Premium">Premium plan ₱2,500/year</option>
          </select>

          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />

          <button type="submit" className="btn">Confirm</button>
        </form>

        <button className="btn close-btn" onClick={onClose}>❌</button>
      </div>
    </div>
  );
}

export default Modal;






// need to download cors
// need to make sure form is sending in the database
// check any error





// what already done
// database model, controller, route, axios
// review them tho
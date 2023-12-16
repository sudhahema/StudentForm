import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Timeline() {
  const [activeStage, setActiveStage] = useState(0);
  const stages = ["Buy", "Dispatch", "Out of Delivery", "Delivered"];

  useEffect(() => {
    const savedActiveStage = localStorage.getItem("activeStage");
    if (savedActiveStage !== null) {
      setActiveStage(JSON.parse(savedActiveStage));
    }
  }, []);


  const setAndSaveActiveStage = (index) => {
    const selectedStage = stages[index]; 
    localStorage.setItem("activeStage", index.toString());
    localStorage.setItem("Stage", selectedStage); 
    setActiveStage(index);
  };
  

  return (
    <div className="vcontainer">
      <div className="cart-container">
        <h2>Timeline</h2>
        <Link to="/">
          <button className="card-container-button">Home</button>
        </Link>
      </div>
      <ul className="timeline">
        {stages.map((stage, index) => (
          <li
            key={index}
            className={`timeline-item ${
              index === activeStage ||
              index === activeStage - 1 ||
              index === activeStage - 2 ||
              index === activeStage - 3
                ? "active"
                : ""
            }`}
            onClick={() => setAndSaveActiveStage(index)}
          >
            <p>{stage}</p>
          </li>
        ))}
      </ul>
      {activeStage === 0 && (
        <div>
          <p className="text-align">Enter the Payment Details</p>
        </div>
      )}
    </div>
  );
}

export default Timeline;

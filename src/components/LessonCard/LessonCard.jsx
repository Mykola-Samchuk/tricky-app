import React, { useState } from "react";
import Button from "../Button/Button";
import "./lesson-card.css";
import logo from "./img/logo.png";

export default function LessonCard({ item }) {
  // complete add / remove
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`lesson-card ${complete ? "active" : ""}`}
      >
        <div className="lesson-img">
          <img src={logo} alt="log-img" />
        </div>
        <div className="title-wrapp">
          <div className="title">
            <h3>{item.title}</h3>
          </div>
          <div className="type">
            <h4>Type: {item.type}</h4>
          </div>
        </div>

        <div className="lesson-option">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setComplete(!complete);
            }}
            title={!complete ? "Complete" : "Remove Complete"}
          />
        </div>
      </div>
    </>
  );
}

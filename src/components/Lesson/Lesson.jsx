import React from "react";
import "./lesson.css";
import LessonCard from "../LessonCard/LessonCard";

export default function Lesson({ items }) {
  return (
    <div>
      <div className="lessons-wrapp">
        {items.map((item, index) => {
          return <LessonCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

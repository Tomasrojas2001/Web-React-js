import React from "react";

export default function RoadmapItem({number,title,text}) {
  return (
    <div className="roadmap-item">
      <div className="roadmap-item-number">
        <div className="number">{number}</div>
      </div>
      <div className="roadmap-item-content">
        <div className="roadmap-item-title">{title}</div>
        <div className="roadmap-item-text">{text}</div>
      </div>
    </div>
  );
}

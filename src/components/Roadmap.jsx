import React from "react";
import RoadmapItem from "./RoadmapItem";

export default function Roadmap() {
  const RoadmapItems = [
    {
      number: 1,
      title: "July",
      text: "EliteBucks $EBS Pre-Sale",
    },
    {
      number: 2,
      title: "August",
      text: "IDO Begins",
    },
    {
      number: 3,
      title: "September",
      text: "EliteBucks $EBS Token Launch",
    },
    {
      number: 4,
      title: "October",
      text: "Elite Group NFT Drop",
    },
    {
      number: 5,
      title: "November",
      text: "Pioneers Gear-Up Camp",
    },
    {
      number: 6,
      title: "December",
      text: "In-Game Store Launch",
    },
    {
      number: 7,
      title: "Q1 2022",
      text: "Breeding Season",
    },
    {
      number: 8,
      title: "Q1 2022",
      text: "Next part of our roadmap revealed",
    },
  ];
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="roadmap">
        <h2 className="roadmap-title">Roadmap</h2>
        <div className="roadmap-container">
          {RoadmapItems.map(({ number, title, text }, index) => (
            <RoadmapItem
              number={number}
              title={title}
              text={text}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

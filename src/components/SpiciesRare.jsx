import React from "react";
import SuperRare1 from "../assets/eliteSuperRare1-BuySection.png";
import SuperRare2 from "../assets/eliteSuperRare2-BuySection.webp";
import SuperRare3 from "../assets/eliteSuperRare3-BuySection.png";
import SuperRare4 from "../assets/eliteSuperRare4-BuySection.png";
import SuperRare5 from "../assets/eliteSuperRare5-BuySection.png";
import SuperRare6 from "../assets/eliteSuperRare6-BuySection.png";

export default function SpiciesRare() {
  return (
    <section className="spiciesRare-section" id="spiciesRare">
      <div className="spiciesRare-container">
        <div className="slider">
          <span style={{ "--i": "1" }}>
            <img src={SuperRare1} alt="" />
          </span>
          <span style={{ "--i": "2" }}>
            <img src={SuperRare2} alt="" />
          </span>
          <span style={{ "--i": "3" }}>
            <img src={SuperRare3} alt="" />
          </span>
          <span style={{ "--i": "4" }}>
            <img src={SuperRare4} alt="" />
          </span>
          <span style={{ "--i": "5" }}>
            <img src={SuperRare5} alt="" />
          </span>
          <span style={{ "--i": "6" }}>
            <img src={SuperRare6} alt="" />
          </span>
        </div>
      </div>
      <h3 className="spicies-rare-title">THE 6 MOST EXPENSIVE THUNDERBIRDS CURRENTLY</h3>
    </section>
  );
}

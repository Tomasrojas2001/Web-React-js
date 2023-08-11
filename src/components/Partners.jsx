import React from 'react'
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2 (1).png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";

export default function Partners() {
  
  const data = [clients1, clients2, clients3, clients4, clients5];

  return (
    <section className='parters-section' >
      <h2 className='partners-title'>Partners</h2>
      <div className="container">
        <div className="partners-container">
          {data.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

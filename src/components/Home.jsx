import { React, useEffect, useRef } from "react";
import eliteInfinityGroup1 from "../assets/Elite-infinity-group.png";
import VanillaTilt from "vanilla-tilt";
import ParticlesBackground from "../ParticlesBackground";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Home() {
  const options = {
    scale: 1,
    speed: 100,
    max: 5,
    reverse: true,
  };

  return (
    <section className="home-container">
      <ParticlesBackground></ParticlesBackground> 
      <Tilt className="box" options={options}>     
        <div className="imgBox BackgroundBigStones"></div>
        <div className="imgBox BackgroundSmallStones"></div>
        <div className="imgBox BackgroundLavaEstatica"></div>
        <div className="imgBox BackgroundThunderbirds"></div>
        <div className="imgBox BackgroundFloor"></div>
        <div className="imgBox BackgroundLava"></div>
        
      </Tilt>
    </section>
  );
}

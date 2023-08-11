import react from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./config-particles/particles.js";

import React from 'react'

const ParticlesBackground = () => {
  return (
    <Particles params={ParticlesConfig}></Particles>
  )
}

export default ParticlesBackground;
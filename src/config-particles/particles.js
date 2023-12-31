const ParticlesConfig = 
    {

        fullScreen: {
          enable: false
        },
        interactivity: {
          events: {
            onClick: {
              mode: "repulse"
            },
            onHover: {
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0
            },
            grab: {
              distance: 400
            },
            repulse: {
              distance: 400
            }
          }
        },
        particles: {
          color: {
            value: "#d0b116"
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 150,
            opacity: 0.4
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600
              }
            },
            enable: true,
            gravity: {
              acceleration: 9
            },
            path: {},
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            },
            random: true,
            speed: 10,
            spin: {}
          },
          number: {
            density: {
              enable: true
            },
            value: 30
          },
          opacity: {
            random: {
              enable: true
            },
            value: {
              min: 0,
              max: 1
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0
            }
          },
          size: {
            random: {
              enable: true
            },
            value: {
              min: 1,
              max: 3
            },
            animation: {
              speed: 4,
              minimumValue: 0.3
            }
          }
        }
      };

export default ParticlesConfig;
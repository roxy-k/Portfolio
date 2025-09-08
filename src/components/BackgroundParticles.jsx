
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackgroundParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}



      options={{
       fullScreen: { enable: false },
background: { color: { value: "#000" } },

        particles: {

          number: { value: 60 },
          color: { value: "#42a5f5" }, 
          links: {
            color: "#42a5f5",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 2
          },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: 3 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.8 } }
          }
        }
      }}
    />
  );
}

export default BackgroundParticles;

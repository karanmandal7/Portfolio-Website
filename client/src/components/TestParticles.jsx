import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const TestParticles = () => {
  console.log("✅ TestParticles mounted!")

  const particlesInit = useCallback(async (engine) => {
    console.log("✅ Engine initialized", engine)
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: { value: "#000000" }
        },
        particles: {
          number: { value: 120 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 1 }
        }
      }}
    />
  )
}

export default TestParticles

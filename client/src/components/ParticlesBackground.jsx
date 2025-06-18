import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // ✅ cover entire screen
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 80 },
          color: { value: '#00ffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.6 },
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 0.5 }
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default ParticlesBackground

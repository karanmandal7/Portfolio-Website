import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import ParticlesBackground from '../components/ParticlesBackground'
import SkillsSection from '../components/SkillsSection'

const Home = () => {
  useEffect(() => {
    const ring = document.getElementById('pulse-ring')

    const triggerPulse = () => {
      if (ring) {
        ring.classList.remove('opacity-0', 'scale-0')
        ring.classList.add('opacity-50', 'scale-150')

        setTimeout(() => {
          ring.classList.remove('opacity-50', 'scale-150')
          ring.classList.add('opacity-0', 'scale-0')
        }, 500)
      }
    }

    window.addEventListener('scroll', triggerPulse)
    return () => window.removeEventListener('scroll', triggerPulse)
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
        delay: i * 0.05
      }
    })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-12 overflow-hidden">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl z-10"
        >
          {/* Name Animation */}
          <motion.div className="mb-6">
            <motion.h1 className="text-5xl md:text-6xl font-bold flex flex-wrap justify-center md:justify-start font-futuristic">
              {'Hi, I’m'.split('').map((char, i) => (
                <motion.span
                  key={`intro-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 className="text-5xl md:text-6xl font-bold flex flex-wrap justify-center md:justify-start text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-sky-400 drop-shadow-[0_0_12px_#60a5fa] mt-2">
              {'Karan Mandal'.split('').map((char, i) => (
                <motion.span
                  key={`name-${i}`}
                  custom={i + 10}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>

          {/* Typewriter */}
          <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-6">
            <Typewriter
              words={[
                'Full Stack Developer 💻',
                'React Enthusiast ⚛️',
                'Node.js Ninja 🧠',
                'AI Curious 🤖',
                'Building the Future 🚀'
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          {/* Bio */}
          <p className="text-gray-400 mb-8 leading-relaxed">
            I build sleek, scalable web apps with futuristic UI, optimized backend, and seamless user experience — transforming ideas into interactive reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <Link
              to="/projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Explore My Work
            </Link>
            <Link
              to="/about"
              className="bg-gray-800 hover:bg-gray-700 border border-cyan-500 px-6 py-3 rounded-lg transition transform hover:scale-105 text-cyan-300"
            >
              Know About Me
            </Link>
            <a
              href="https://github.com/karanmandal7"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline hover:text-blue-400 mt-2 md:mt-0"
            >
              GitHub ↗
            </a>
          </div>

          {/* ↓ Scroll to Skills */}
          <div className="mt-4 flex justify-center animate-bounce sm:text-lg text-base">
            <a href="#skills" className="text-cyan-400 hover:text-cyan-300 transition">
              ↓ Skills
            </a>
          </div>
        </motion.div>

        {/* Right - Avatar + Rings */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative w-full max-w-xs md:max-w-md z-10 mx-auto"
        >
          {/* Rings + Core */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div className="w-72 h-72 rounded-full border-2 border-cyan-400 animate-spin-slow opacity-20"></div>
            <div className="absolute w-48 h-48 rounded-full border-2 border-blue-400 animate-spin-slower opacity-30"></div>
            <div className="absolute w-24 h-24 rounded-full bg-blue-500 blur-2xl opacity-50 animate-pulse"></div>
          </div>

          {/* Pulse Ring */}
          <div id="pulse-ring" className="absolute z-10 rounded-full border-2 border-cyan-400 opacity-0 w-20 h-20 scale-0 transition-all duration-700 ease-out"></div>

          {/* Avatar */}
          <div className="relative z-10">
            <Player autoplay loop src="/lottie/avatar.json" className="w-full" />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative w-full min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10 py-0">
          <SkillsSection />
        </div>
      </section>
    </>
  )
}

export default Home

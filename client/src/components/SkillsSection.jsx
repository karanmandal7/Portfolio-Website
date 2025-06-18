import { FaJava } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiPython,
  SiMysql,
  SiSpringboot,
  SiRedux,
  SiJavascript,
  SiVite,
  SiPostman,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

const skills = [
  // Core Stack
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: 'React.js', icon: <SiReact className="text-cyan-400 text-3xl" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
  { name: 'Express', icon: <SiExpress className="text-white text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-300 text-3xl" /> },
  { name: 'Socket.IO', icon: <SiSocketdotio className="text-gray-100 text-3xl" /> },
  { name: 'Redux / Zustand', icon: <SiRedux className="text-purple-400 text-3xl" /> },
  { name: 'Python', icon: <SiPython className="text-blue-400 text-3xl" /> },
  { name: 'Java', icon: <FaJava className="text-orange-300 text-3xl" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-300 text-3xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-sky-300 text-3xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-300 text-3xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-3xl" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white text-3xl" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-teal-300 text-3xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-gray-300 text-3xl" /> },

  // UI / Tools
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-400 text-3xl" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500 text-3xl" /> },
  { name: 'UI / UX', icon: <span className="text-cyan-200 text-2xl">🎨</span> },
  { name: 'Thunder Client', icon: <span className="text-teal-300 text-2xl">⚡</span> },
  { name: 'Render', icon: <span className="text-purple-300 text-2xl">🚀</span> },

  // AI Tools
  { name: 'ChatGPT', icon: <span className="text-green-400 text-2xl">🤖</span> },
  { name: 'Claude AI', icon: <span className="text-yellow-300 text-2xl">🧠</span> },
  { name: 'Cursor AI', icon: <span className="text-indigo-300 text-2xl">🖱️</span> },
  { name: 'Replit AI', icon: <span className="text-orange-300 text-2xl">⚙️</span> },
  { name: 'Blackbox AI', icon: <span className="text-gray-300 text-2xl">📦</span> },
  { name: 'Lovable', icon: <span className="text-pink-400 text-2xl">❤️</span> },
  { name: 'Perplexity', icon: <span className="text-violet-300 text-2xl">🔍</span> }
]

const SkillsSection = () => {
  return (
    <section className="relative mt-0 py-20 px-6 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">My Skill Set</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 mb-2 rounded-lg shadow-md hover:shadow-cyan-400/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 20px rgba(0, 255, 255, 0.25)'
              }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

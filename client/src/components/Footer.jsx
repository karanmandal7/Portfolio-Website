import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-gray-400 py-8 text-center text-sm border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <p>
          Designed & Built with 💙 by{' '}
          <span className="text-cyan-400 font-semibold">Karan Mandal</span>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>

        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a
            href="https://github.com/karanmandal7"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <Link to="/about" className="hover:text-cyan-400 transition">
            About Me
          </Link>
          <a href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

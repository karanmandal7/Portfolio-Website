import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white px-2 py-1 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-cyan-400 tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          Karan.Dev
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block ml-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-lg shadow-lg p-4 space-y-4">
          <Link to="/" onClick={toggleMenu} className="block text-white hover:text-cyan-400">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="block text-white hover:text-cyan-400">
            About
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="block text-white hover:text-cyan-400">
            Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-white hover:text-cyan-400">
            Contact
          </Link>

          {/* Mobile Theme Toggle */}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

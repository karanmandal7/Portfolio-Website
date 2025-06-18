import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition duration-200"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle

import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center text-center font-[Inter]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Avatar */}
      <motion.img
        src="/karan-ghibli.jpg.png"
        alt="Karan Mandal - Ghibli Style"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-cyan-400 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Greeting */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hey there — I’m Karan 👋
      </motion.h2>

      {/* Intro */}
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
        I’m a full-stack developer, a deep tech thinker, and a relentless learner who believes software isn’t just code — it’s creativity in motion.
        My journey isn’t about just writing code; it’s about solving meaningful problems, crafting seamless user experiences, and pushing the boundary between humans and machines.
      </p>

      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
        With a B.Tech in Computer Science (8.58 GPA), I’ve built intelligent systems ranging from real-time MERN applications and AI assistants to disease predictors using machine learning.
        Whether it's using modern stacks like React, Node.js, Spring Boot or pioneering prompt engineering with ChatGPT and Claude AI — I’m obsessed with turning vision into real-world impact.
      </p>

      {/* AI Tools Section */}
      <div className="text-left max-w-4xl mb-12 space-y-4 text-white/90">
        <h3 className="text-2xl font-semibold text-cyan-400">🧠 Prompt Engineering & AI Toolkit</h3>
        <p>
          I specialize in <span className="text-cyan-300 font-medium">AI prompt engineering</span>, designing high-precision prompts for models like GPT and Claude.
          I’ve used AI for code generation, testing, debugging, UI content, automated workflows, and more.
        </p>

        <p className="text-gray-300">AI tools I regularly leverage:</p>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li><strong>ChatGPT:</strong> Fast brainstorming, debugging, and productivity hacks</li>
          <li><strong>Claude AI:</strong> Long-form completions and document reasoning</li>
          <li><strong>Replit AI:</strong> Code auto-completion and feature prototyping</li>
          <li><strong>Cursor AI:</strong> On-the-fly code generation and refactoring</li>
          <li><strong>Lovable AI:</strong> Human-like responses for UX-focused experiences</li>
        </ul>

        <p>
          AI isn’t just a tool — it’s part of how I think, work, and build <span className="text-cyan-300 font-medium">faster, smarter, and more creatively</span>.
        </p>
      </div>

      {/* Project Highlights */}
      <div className="text-left max-w-4xl mb-12 space-y-4 text-white/90">
        <h3 className="text-2xl font-semibold text-cyan-400">🚀 Projects That Define Me</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li><strong>KindleTalk:</strong> A real-time MERN chat app (Socket.IO, Zustand, JWT)</li>
          <li><strong>Promptly AI:</strong> Gemini-powered chatbot with HuggingFace APIs</li>
          <li><strong>Heart Disease Predictor:</strong> ML-driven health prediction app (XGBoost + Flask)</li>
          <li><strong>OJLA:</strong> A job listing portal with filtering, UI/UX polish, and MERN architecture</li>
        </ul>
      </div>

      {/* Skills Snapshot */}
      <p className="max-w-4xl mb-10 text-lg text-white/80 text-center">
        🛠 <span className="text-cyan-400 font-semibold">Stacks I’m fluent in:</span> React, Node.js, Express, MongoDB, Zustand, Tailwind, Java, Spring Boot, Python, Git, SQL, Vite, Postman, VS Code — plus tools like Render, ThunderClient, and AI development platforms.
      </p>

      {/* Certification Snapshot */}
      <p className="max-w-4xl mb-10 text-white/70 text-center">
        🏅 <span className="text-cyan-300 font-semibold">Highlights:</span> Elite NPTEL Certification • Hewlett Packard Engineering Simulation • Meta Javascript (Coursera)
      </p>

      {/* Call To Action Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/karanmandal77/"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
        >
          💼 Connect on LinkedIn
        </a>
        <a
          href="https://github.com/karanmandal7"
          target="_blank"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md border border-white/20 transition transform hover:scale-105"
        >
          🛠 See My GitHub
        </a>
        <a
          href="https://wa.me/917908588788?text=Hey%20Karan!%20Saw%20your%20awesome%20portfolio%20and%20would%20love%20to%20connect."
          target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
        >
          📱 Chat on WhatsApp
        </a>
      </div>

      {/* Email */}
      <p className="mt-6 text-gray-300 text-sm">
        📧 Prefer email? Reach me at  
        <a href="mailto:karan.b.mandal@gmail.com" className="text-cyan-400 hover:underline ml-1">
          karan.b.mandal@gmail.com
        </a>
      </p>
    </motion.section>
  )
}

export default About

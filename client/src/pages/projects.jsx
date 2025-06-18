const projects = [
  {
    title: 'KindleTalk – Chat Application',
    description:
      'A real-time full-stack chat application built with MERN stack, featuring instant messaging using Socket.IO and state management via Zustand. Implements JWT authentication and chat room logic to enable secure, real-time conversations across devices.',
    tech: 'ReactJS, NodeJS, ExpressJS, MongoDB, Zustand, Tailwind, Socket.IO',
    demo: 'https://chat-application-fullstack-ee9x.onrender.com',
    code: 'https://github.com/karanmandal7/chat-application-fullstack',
  },
  {
    title: 'Heart Disease Prediction System – AI/ML',
    description:
      'Built an AI-powered heart disease prediction web app using XGBoost and Random Forest. The system performs advanced preprocessing, feature analysis, and real-time predictions through an intuitive Flask interface. It’s designed to assist healthcare professionals and individuals in assessing heart health risk accurately.',
    tech: 'Python, XGBoost, Random Forest, Pandas, Flask, Jupyter Notebook, HTML, CSS, Pickle',
    code: 'https://github.com/karanmandal7/Heart-Disease-Prediction-using-AI-ML',
  },
  {
    title: 'Promptly – AI Chat Bot',
    description:
      'A multimodal chatbot powered by Google Gemini and HuggingFace APIs. It supports intelligent text and image processing, offers image captioning, summarization, and context-aware chat, making it a smart assistant for daily tasks.',
    tech: 'ReactJS, HTML, CSS, Gemini API, HuggingFace API',
    demo: 'https://promptly-ai-bot.vercel.app/',
    code: 'https://github.com/karanmandal7/Promptly-AI-Bot',
  },
  {
    title: 'OJLA – Job Listing App',
    description:
      'A complete MERN stack job board with dynamic job listings, filters, validation, and CRUD operations. Built for performance and clarity, it includes seamless user experience with modern UI and responsive layout.',
    tech: 'ReactJS, ExpressJS, NodeJS, MongoDB, Tailwind CSS, Formik, Yup',
    demo: 'https://open-job-listing-application.vercel.app/',
    code: 'https://github.com/karanmandal7/Open-Job-Listing-Application',
  },
  {
    title: 'News Website',
    description:
      'Dynamic news aggregator application using Axios and public APIs. Supports category-based filtering, detail views, and clean responsive design for an easy reading experience across devices.',
    tech: 'ReactJS, HTML, CSS, Axios',
    demo: 'https://news-website-beta-six.vercel.app/',
    code: 'https://github.com/karanmandal7/News-Website',
  },
  {
    title: 'Weekend Watch – Movie Browser',
    description:
      'A stylish movie browser app using TMDB API that allows users to discover trending films, view detailed descriptions, and save favorites. Designed with a clean UI and mobile-first responsive approach.',
    tech: 'ReactJS, CSS, TMDB API, REST API',
    demo: 'https://react-js-movie-website-i21a.vercel.app/',
    code: 'https://github.com/karanmandal7/ReactJS-Movie-Website',
  },
  {
    title: 'Blog Website',
    description:
      'A full-stack blogging platform with Markdown editor support, user-generated content, MongoDB backend, and secure content lifecycle management. Great for personal publishing or developer articles.',
    tech: 'ReactJS, ExpressJS, NodeJS, MongoDB, Bootstrap, Axios, CSS',
    demo: 'https://cerulean-fenglisu-9e4a53.netlify.app/',
    code: 'https://github.com/karanmandal7/Blog-Website',
  },
]

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-black text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
            </div>
            <div className="flex gap-4 mt-auto">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-14 text-lg font-medium animate-pulse">
        🚀 More awesome projects coming soon...
      </p>
    </div>
  )
}

export default Projects

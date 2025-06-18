import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    console.log('Sending form data:', formData)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {
      alert('✅ Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      alert(`❌ ${data.error || 'Something went wrong.'}`)
    }
  } catch (error) {
    console.error('❌ Error sending message:', error)
    alert('⚠️ Server error. Please try again later.')
  }
}


  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact


import React from 'react'

const Contact = () => {
  return (
    <section className="bg-sectionBg-contact dark:bg-sectionBg-dark.contact px-6 py-16">
  <h2 className="text-3xl font-bold text-fg dark:text-fg-dark text-center mb-12">Contact Me</h2>
  
  <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
    
    <div className="bg-white dark:bg-[#0f1b2d] shadow-md rounded-xl p-6 w-full lg:w-2/3">
      <h3 className="text-xl font-semibold text-fg dark:text-fg-dark mb-4">Send a Message</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark" />
        <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark"></textarea>
        <button type="submit" className="bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-md hover:brightness-110 transition">Send</button>
      </form>
    </div>

    <div className="w-full lg:w-1/3 flex flex-col gap-6">
      <div className="bg-white dark:bg-[#142438] shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold text-fg dark:text-fg-dark mb-4">Contact Info</h3>
        <p className="text-muted dark:text-muted-dark mb-2">📧 Email: <span className="text-fg dark:text-fg-dark">yourname@example.com</span></p>
        <p className="text-muted dark:text-muted-dark mb-2">📍 Location: New Delhi, India</p>
      </div>

      {/* Social Links Card */}
      <div className="bg-white dark:bg-[#142438] shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold text-fg dark:text-fg-dark mb-4">Socials</h3>
        <ul className="space-y-2">
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-dark hover:underline">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-dark hover:underline">LinkedIn</a></li>
          <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-dark hover:underline">Twitter</a></li>
        </ul>
      </div>
    </div>

  </div>
</section>

)
}

export default Contact
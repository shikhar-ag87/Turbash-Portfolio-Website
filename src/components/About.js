import React from 'react'
import Card from './Card'
const About = () => {
  const cards=[
    {title: "Who I Am",
      content: "I'm Turbash Negi, a passionate Computer Science and Engineering student at JNU. I enjoy turning ideas into real-world applications and thrive on solving challenges with code."
    },
    {title: "What I Do ",
      content: "I design and develop web apps using the MERN stack. I'm experienced with tools like Flask, FastAPI, and Docker, and passionate about creating responsive, intuitive UIs with React and Tailwind."
    },
    {title: "My Journey",
      content: "From building ISS stowage systems to UFC predictors, I've explored diverse domains. Hackathons and tech communities have been a key part of my growth and learning."
    },
    {title: " Beyond Code",
      content: "I create YouTube videos on tech projects, love collaborating with peers, and constantly push myself to learn new tools and frameworks. I believe in building for impact."
    }
  ]
  return (
    <section id='about' >
      <div className="about-container mt-20 md:mt-32 mb-10 md:mb-16 px-6 text-center lg:max-w-[85%] 2xl:max-w-[60%] mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>
        <div className="card-grid grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-20 md:mt-32 justify-items-center">
          {cards.map(card => { return (
            <Card key={card.title} title={card.title} content={card.content}/>
          )})}
        </div>
      </div>
    </section>
  )
}

export default About
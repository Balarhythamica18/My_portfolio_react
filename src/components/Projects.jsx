import React from 'react'

// Option A: import static JSON
// import projects from '../data/projects.json'

// Option B: hardcode from your original html
const projects = [
  {
    title: 'Bakery Shop Website',
    subtitle: 'Personal Project | HTML, CSS, JavaScript, React',
    desc: 'Developed a responsive and visually appealing bakery shop website to showcase products and online orders. Integrated product galleries, interactive UI elements, and smooth navigation.',
    link: 'https://balarhythamica18.github.io/Shopping/#/'
  },
  {
    title: 'QR Code Generator',
    subtitle: 'Personal Project | HTML, CSS, JavaScript, React',
    desc: 'Built a QR code generator application allowing users to generate QR codes instantly for text, URLs, and other inputs with a clean and modern UI.',
    link: 'https://balarhythamica18.github.io/QR-Code-Generator/'
  },
  {
    title: 'Advice App',
    subtitle: 'Personal Project | HTML, CSS, JavaScript, React',
    desc: 'Created an Advice Generator App using API integration to fetch random advice. Implemented a minimal, engaging UI with responsive design for both desktop and mobile.',
    link: 'https://balarhythamica18.github.io/Advice-app/'
  }
]

const ProjectCard = ({p}) => (
  <div className="project-card">
    <h2>{p.title}</h2>
    <h3>{p.subtitle}</h3>
    <p>{p.desc}</p>
    <a href={p.link} className="project-link" target="_blank" rel="noreferrer">Click Here</a>
  </div>
)

const Projects = () => {
  return (
    <main className="main-content-projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </main>
  )
}

export default Projects

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPython,
  DiDjango,
  DiReact,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiSass,
  DiLinux,
  DiPhp,
  DiWordpress,
  DiGit,
  DiUbuntu,
  DiBootstrap,
  DiMaterializecss,
  DiJavascript,
  DiGithub,
  DiGithubAlt,
  DiGithubBadge
} from 'react-icons/di'

import '../styles/components/technologies-container.sass'

const technologies = [
  { id: "html", name: 'HTML5', icon: <DiHtml5 /> },
  { id: "css", name: 'CSS3', icon: <DiCss3 /> },
  { id: "sass", name: 'SASS', icon: <DiSass /> },
  { id: "bootstrap", name: 'Bootstrap', icon: <DiBootstrap /> },
  { id: "materialize", name: 'Materialize', icon: <DiMaterializecss /> },
  { id: "python", name: 'Python3', icon: <DiPython /> },
  { id: "js", name: 'JavaScript', icon: <DiJavascript /> },
  { id: "php", name: 'PHP', icon: <DiPhp /> },
  { id: "django", name: 'Django', icon: <DiDjango /> },
  { id: "react", name: 'React', icon: <DiReact /> },
  { id: "wordpress", name: 'WordPress', icon: <DiWordpress /> },
  { id: "postgresql", name: 'PostgreSQL', icon: <DiPostgresql /> },
  { id: "mysql", name: 'MySQL', icon: <DiMysql /> },
  { id: "github", name: 'Github', icon: <DiGithubBadge /> },
  { id: "linux", name: 'Linux', icon: <DiLinux /> },
  { id: "ubuntu", name: 'Ubuntu', icon: <DiUbuntu /> },

]

export const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}

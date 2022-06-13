import "./styles/styles.css";
import Card from "./Card/Card";
import { projects } from "./projectData"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <section className="cards">

        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name} 
            imgSrc={project.imageSrc}
            imgAlt={project.imgAlt}
            description={project.description}
            techL={project.techL}
            techR={project.techR}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}

      </section>
    </section>
  );
};

export default Projects;

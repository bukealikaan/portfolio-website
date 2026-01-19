import projects from "../data/projects.js"
import ProjectCard from "../components/ProjectCard.js"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projelerim</h2>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
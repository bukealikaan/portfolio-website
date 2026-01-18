function ProjectCard({name, description, technologies, link}) {
    return (
        <div className="project-cards">
            <span>
                <h3>{name}</h3>
                <p>{description}</p>

                <ul>
                    {technologies.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>

                <a href={link} target="_blank" rel="noopener noreferrer">Projeyi Gör</a>
            </span>
        </div>
    )
}

export default ProjectCard;
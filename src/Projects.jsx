
import "./Projects.css";

const projects = [
    {
        number: "01",
        title: "7200 Barber Shop",
        category: "WEB DESIGN & DEVELOPMENT",
        description:
            "A modern barber shop website designed to showcase barber services, pricing, and shop information through a clean and user-friendly interface.",
        tech: ["React", "CSS", "JavaScript"],
        image: "/src/assets/proj2.png",
        link: "https://7200hairstudio.vercel.app",
    },
    {
        number: "02",
        title: "Personal Portfolio",
        category: "UI/UX DESIGN & DEVELOPMENT",
        description:
            "A personal portfolio website that highlights my design skills, development projects, and experience in creating intuitive digital experiences.",
        tech: ["React", "CSS", "JavaScript"],
        image: "/src/assets/portf.png",
        link: "https://miguelfrancisco.vercel.app",
    },
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-heading">
                <h2>
                    My Works
                </h2>
                <p>
                    A selection of websites and digital experiences
                    I've designed and developed.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={`${project.title} project preview`}
                            />
                            <span className="project-number">{project.number}</span>
                        </div>

                        <div className="project-info">
                            <span className="project-category">
                                {project.category}
                            </span>

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="tech-stack">
                                {project.tech.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            {project.link ? (
                                <a
                                    className="project-link"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project <span>↗</span>
                                </a>
                            ) : (
                                <span className="project-link project-placeholder">
                                    Add project link ↗
                                </span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;

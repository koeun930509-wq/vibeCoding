import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects }) {
  return (
    <main className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </main>
  );
}

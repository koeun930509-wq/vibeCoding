export default function ProjectCard({ project }) {
  const { title, description, url, github, techStack } = project;
  const previewImage = url
    ? `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
    : null;

  return (
    <article className="project-card">
      <div className="project-card__image">
        {previewImage ? (
          <img src={previewImage} alt={`${title} 미리보기`} loading="lazy" />
        ) : (
          <div className="project-card__image-placeholder">미리보기 없음</div>
        )}
      </div>
      <div className="project-card__body">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="project-card__tags">
          {techStack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card__links">
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

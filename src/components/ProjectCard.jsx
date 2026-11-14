import ExtLink from './ExtLink.jsx'
import VideoPreview from './VideoPreview.jsx'

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card">
      <VideoPreview project={project} onOpen={onOpen} />

      <div className="card__meta">
        <span>
          <span className="accent">{project.num}</span> — {project.year}
        </span>
        <span className="card__status">
          <span className="accent">●</span>
          {project.kind}
        </span>
      </div>
      <h3 className="card__title">{project.title}</h3>
      <p className="card__desc muted">{project.description}</p>
      <div className="card__foot">
        <div className="card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="card__links">
          {project.live && (
            <ExtLink href={project.live} className="card__source">
              live ↗
            </ExtLink>
          )}
          <ExtLink href={project.source} className="card__source">
            source ↗
          </ExtLink>
        </div>
      </div>
    </article>
  )
}

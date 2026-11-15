import ExtLink from './ExtLink.jsx'
import VideoPreview from './VideoPreview.jsx'
import { useI18n } from '../lib/i18n.jsx'

export default function ProjectCard({ project, onOpen }) {
  const { t, tr } = useI18n()

  return (
    <article className="card">
      <VideoPreview project={project} onOpen={onOpen} />

      <div className="card__meta">
        <span>
          <span className="accent">{project.num}</span> — {project.year}
        </span>
        <span className="card__status">
          <span className="accent">●</span>
          {tr(project.kind)}
        </span>
      </div>
      <h3 className="card__title">{project.title}</h3>
      <p className="card__desc muted">{tr(project.description)}</p>
      <div className="card__foot">
        <div className="card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="card__links">
          {project.live && (
            <ExtLink href={project.live} className="card__source">
              {t('work.live')}
            </ExtLink>
          )}
          <ExtLink href={project.source} className="card__source">
            {t('work.source')}
          </ExtLink>
        </div>
      </div>
    </article>
  )
}

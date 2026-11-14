import { placeholders } from '../lib/ascii.js'

// Превью проекта в карточке.
// - есть video → обложка на паузе (затемнена) + большой ▶; клик открывает плеер (onOpen)
// - нет video  → ASCII-заглушка
export default function VideoPreview({ project, onOpen }) {
  if (project.video) {
    return (
      <button
        type="button"
        className="media media--video"
        aria-label={`Play video: ${project.title}${project.duration ? `, ${project.duration}` : ''}`}
        onClick={(e) => onOpen(project, e.currentTarget)}
      >
        {project.poster && <img className="media__poster" src={project.poster} alt="" loading="lazy" />}
        <span aria-hidden="true" className="media__shade" />
        <span aria-hidden="true" className="media__scan" />
        <span aria-hidden="true" className="media__corner media__corner--tl">
          ┌ {project.video.split('/').pop()}
        </span>
        <span aria-hidden="true" className="media__corner media__corner--tr">
          [ video ] ┐
        </span>
        {project.duration && (
          <span aria-hidden="true" className="media__corner media__corner--bl">
            └ {project.duration}
          </span>
        )}
        <span aria-hidden="true" className="media__play">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        </span>
      </button>
    )
  }

  return (
    <div className="media" role="img" aria-label={`Preview of ${project.title} (video coming soon)`}>
      <Placeholder kind={project.placeholder} />
      <span aria-hidden="true" className="media__scan" />
      <span aria-hidden="true" className="media__corner media__corner--tl">
        ┌ preview.mp4
      </span>
      <span aria-hidden="true" className="media__corner media__corner--tr">
        [ video ] ┐
      </span>
      <span aria-hidden="true" className="media__corner media__corner--bl">
        └ video coming soon
      </span>
    </div>
  )
}

function Placeholder({ kind }) {
  if (kind === 'f1') {
    return (
      <span aria-hidden="true" className="ph-f1">
        <span className="ph-f1__lights">
          <pre className="ph-f1__frame">{placeholders.f1frame}</pre>
          <pre className="ph-f1__dots">{placeholders.f1dots}</pre>
        </span>
        <span className="ph-f1__label">LIGHTS OUT · REACTION 0.000 s</span>
      </span>
    )
  }
  return (
    <pre aria-hidden="true" className={`ph ph--${kind}`}>
      {placeholders[kind] ?? ''}
    </pre>
  )
}

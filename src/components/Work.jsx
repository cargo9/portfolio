import { useCallback, useState } from 'react'
import SectionLabel from './SectionLabel.jsx'
import ProjectCard from './ProjectCard.jsx'
import VideoModal from './VideoModal.jsx'
import { projects } from '../data/projects.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Work() {
  const { t } = useI18n()
  const [active, setActive] = useState(null) // { project, originEl }

  const open = useCallback((project, originEl) => setActive({ project, originEl }), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="work" className="section">
      <div className="container section__inner section__inner--work">
        <SectionLabel num="03">{t('work.label')}</SectionLabel>
        <div className="section__head">
          <h2 className="h2">
            {t('work.title')} <em className="h2__em">{t('work.titleEm')}</em>
          </h2>
          <p className="section__desc muted">{t('work.desc')}</p>
        </div>
        <div className="work-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={open} />
          ))}
        </div>
      </div>
      {active && <VideoModal key={active.project.id} project={active.project} originEl={active.originEl} onClose={close} />}
    </section>
  )
}

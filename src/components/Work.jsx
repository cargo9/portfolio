import { useCallback, useState } from 'react'
import SectionLabel from './SectionLabel.jsx'
import ProjectCard from './ProjectCard.jsx'
import VideoModal from './VideoModal.jsx'
import { projects } from '../data/projects.js'

export default function Work() {
  const [active, setActive] = useState(null) // { project, originEl }

  const open = useCallback((project, originEl) => setActive({ project, originEl }), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="work" className="section">
      <div className="container section__inner section__inner--work">
        <SectionLabel num="03">selected work</SectionLabel>
        <div className="section__head">
          <h2 className="h2">
            Things I <em className="h2__em">build</em>
          </h2>
          <p className="section__desc muted">Press play to watch a project in action. Each one takes me a layer deeper.</p>
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

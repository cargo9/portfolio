import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

// Полноэкранный плеер.
// Компьютер: видео «вылетает» из карточки в центр экрана (FLIP-анимация), крестик / Esc / клик по фону — закрыть.
// Телефон: настоящий fullscreen + поворот в альбомную ориентацию (Android);
//          на iPhone — системный плеер (он сам поворачивается вместе с телефоном).

const EASE_OPEN = 'cubic-bezier(.2,.8,.2,1)'
const EASE_CLOSE = 'cubic-bezier(.4,0,.2,1)'

const isTouchPhone = () =>
  window.matchMedia?.('(pointer: coarse)').matches && Math.min(window.innerWidth, window.innerHeight) < 820

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function VideoModal({ project, originEl, onClose }) {
  const backdropRef = useRef(null)
  const stageRef = useRef(null)
  const videoRef = useRef(null)
  const closeBtnRef = useRef(null)
  const closingRef = useRef(false)
  const wasFullscreenRef = useRef(false)

  // transform, который ставит сцену поверх превью в карточке
  const originTransform = useCallback(() => {
    const stage = stageRef.current
    if (!stage || !originEl) return null
    const from = originEl.getBoundingClientRect()
    const to = stage.getBoundingClientRect()
    if (!from.width || !to.width) return null
    const dx = from.left - to.left
    const dy = from.top - to.top
    return `translate(${dx}px, ${dy}px) scale(${from.width / to.width}, ${from.height / to.height})`
  }, [originEl])

  const close = useCallback(async () => {
    if (closingRef.current) return
    closingRef.current = true
    const video = videoRef.current
    video?.pause()
    try { screen.orientation?.unlock?.() } catch { /* not supported */ }
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
    await new Promise((r) => requestAnimationFrame(r)) // дать раскладке обновиться после выхода из fullscreen

    const anims = []
    if (!reducedMotion()) {
      const t = originTransform()
      if (t && stageRef.current) {
        anims.push(stageRef.current.animate([{ transform: 'none' }, { transform: t }], { duration: 380, easing: EASE_CLOSE, fill: 'forwards' }))
      }
      if (backdropRef.current) {
        anims.push(backdropRef.current.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'ease', fill: 'forwards' }))
      }
    }
    await Promise.all(anims.map((a) => a.finished.catch(() => {})))
    onClose()
    originEl?.focus({ preventScroll: true })
  }, [onClose, originEl, originTransform])

  // Открытие. layout-эффект — чтобы fullscreen/play успели в том же клике (иначе браузер не разрешит).
  useLayoutEffect(() => {
    const stage = stageRef.current
    const video = videoRef.current
    closingRef.current = false

    if (isTouchPhone()) {
      if (stage.requestFullscreen) {
        stage
          .requestFullscreen({ navigationUI: 'hide' })
          .then(() => {
            wasFullscreenRef.current = true
            return screen.orientation?.lock?.('landscape')
          })
          .catch(() => {})
      } else if (video.webkitEnterFullscreen) {
        try { video.webkitEnterFullscreen() } catch { /* iOS: метаданные ещё не загружены — останется оверлей */ }
      }
    }
    video.play().catch(() => {})

    if (!reducedMotion()) {
      const t = originTransform()
      if (t) stage.animate([{ transform: t }, { transform: 'none' }], { duration: 480, easing: EASE_OPEN })
      backdropRef.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease' })
    }

    closeBtnRef.current?.focus({ preventScroll: true })
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prevOverflow
    }
  }, [originTransform])

  useEffect(() => {
    const video = videoRef.current
    const onKey = (e) => e.key === 'Escape' && close()
    // вышли из fullscreen жестом «назад» / системной кнопкой → закрываем плеер целиком
    const onFsChange = () => {
      if (document.fullscreenElement) wasFullscreenRef.current = true
      else if (wasFullscreenRef.current) close()
    }
    const onIosEnd = () => close()
    document.addEventListener('keydown', onKey)
    document.addEventListener('fullscreenchange', onFsChange)
    video.addEventListener('webkitendfullscreen', onIosEnd)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('fullscreenchange', onFsChange)
      video.removeEventListener('webkitendfullscreen', onIosEnd)
    }
  }, [close])

  return createPortal(
    <div className="vm" role="dialog" aria-modal="true" aria-label={`${project.title} — video`}>
      <div ref={backdropRef} className="vm__backdrop" onClick={close} />
      <div ref={stageRef} className="vm__stage">
        <video
          ref={videoRef}
          className="vm__video"
          src={project.video}
          poster={project.poster ?? undefined}
          controls
          playsInline
          preload="auto"
        />
        <button ref={closeBtnRef} type="button" className="vm__close" aria-label="Close video" onClick={close}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="vm__title" aria-hidden="true">
          <span className="accent">▶</span> {project.title}
        </div>
      </div>
    </div>,
    document.body,
  )
}

import { useEffect, useState } from 'react'
import { torus } from '../lib/ascii.js'
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion.js'

export default function Torus() {
  const [tick, setTick] = useState(0)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setTick((t) => t + 1), 70)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <pre role="img" aria-label="A rotating donut drawn with ASCII characters" className="torus">
      {torus(1 + tick * 0.05, 1 + tick * 0.025)}
    </pre>
  )
}

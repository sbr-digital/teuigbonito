import React, { useEffect, useRef, useState } from 'react'

interface StatItemData {
  number: string
  label: string
}

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats: StatItemData[] = [
    { number: '300K+', label: 'Faturamento Gerado' },
    { number: '150K+', label: 'Seguidores' },
    { number: '100+', label: 'Clientes Satisfeitos' },
    { number: '95%', label: 'Taxa de Sucesso' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
import React from 'react'

interface ServiceData {
  icon: string
  title: string
  description: string
}

const Services: React.FC = () => {
  const services: ServiceData[] = [
    {
      icon: '📱',
      title: 'Gestão de Instagram',
      description: 'Criação de conteúdo estratégico, planejamento de posts, stories e reels que geram engajamento e conversões.'
    },
    {
      icon: '🎨',
      title: 'Design Gráfico',
      description: 'Identidade visual completa, posts profissionais e materiais que destacam sua marca no feed.'
    },
    {
      icon: '📊',
      title: 'Consultoria Digital',
      description: 'Estratégias personalizadas de crescimento, análise de métricas e otimização de performance.'
    },
    {
      icon: '🎯',
      title: 'Tráfego Pago',
      description: 'Campanhas de anúncios no Instagram e Facebook que atraem seu público ideal e geram vendas.'
    },
    {
      icon: '✍️',
      title: 'Copywriting',
      description: 'Textos persuasivos que contam a história da sua marca e conectam com seu público.'
    },
    {
      icon: '📈',
      title: 'Growth Hacking',
      description: 'Técnicas avançadas para crescimento acelerado e construção de audiência engajada.'
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="section-header">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">Soluções completas de marketing digital para transformar sua presença online em resultados reais</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
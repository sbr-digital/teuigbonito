import React from 'react'

interface PortfolioItemData {
  title: string
  description: string
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItemData[] = [
    {
      title: 'Marca de Moda',
      description: '+250% de crescimento em 3 meses'
    },
    {
      title: 'E-commerce',
      description: 'R$ 150K em vendas diretas pelo Instagram'
    },
    {
      title: 'Influenciador Digital',
      description: 'De 5K para 80K seguidores'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header">
        <h2 className="section-title">Portfólio</h2>
        <p className="section-subtitle">Resultados reais de clientes que transformaram seus perfis com nossas estratégias</p>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'

interface TestimonialData {
  text: string
  avatar: string
  name: string
  role: string
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      text: 'Meu perfil cresceu 300% em apenas 4 meses! As estratégias são incríveis e o suporte é excepcional. Agora vivo do Instagram de verdade.',
      avatar: 'MF',
      name: 'Marina Ferreira',
      role: 'Coach de Emagrecimento'
    },
    {
      text: 'O ROI foi surpreendente. Cada real investido voltou multiplicado. A equipe entende de verdade de engajamento e conversão.',
      avatar: 'RS',
      name: 'Roberto Silva',
      role: 'Dono de E-commerce'
    },
    {
      text: 'Finalmente encontrei profissionais que entregam o que prometem. Meu Instagram se transformou em uma verdadeira vitrine de negócios.',
      avatar: 'JC',
      name: 'Juliana Costa',
      role: 'Designer de Interiores'
    }
  ]

  return (
    <section id="depoimentos" className="testimonials">
      <div className="section-header">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle">Histórias de sucesso de quem transformou seu Instagram com nossa agência</p>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="testimonial-card">
            <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
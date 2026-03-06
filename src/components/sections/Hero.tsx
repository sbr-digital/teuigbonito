import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <div>
          {/* <img 
            src="/logo-black-1.svg" 
            alt="Teu IG Bonito - Agência de Marketing Digital" 
            className="hero-logo"
          /> */}
          <h1>Transforme seu Instagram em uma Máquina de Vendas</h1>
          <p>Especialistas em engajamento e estratégias digitais. Ajudamos você a viver do Instagram com conteúdo que converte.</p>
          <div className="hero-buttons">
            <a href="#contato" className="cta-button">Começar Agora</a>
            <a href="#servicos" className="secondary-button">Nossos Serviços</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
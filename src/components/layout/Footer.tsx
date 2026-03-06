import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Teu IG Bonito</h4>
          <p>Agência especializada em marketing digital e engajamento no Instagram. Transformamos perfis em negócios lucrativos.</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/teuigbonitoo/" 
              className="social-link" 
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              📷
            </a>
            <a 
              href="https://linktr.ee/teuigbonito" 
              className="social-link" 
              aria-label="Linktree" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🔗
            </a>
            <a 
              href="https://wa.me/5553999999999" 
              className="social-link" 
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💬
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Serviços</h4>
          <a href="#servicos">Gestão de Instagram</a>
          <a href="#servicos">Design Gráfico</a>
          <a href="#servicos">Consultoria Digital</a>
          <a href="#servicos">Tráfego Pago</a>
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <a href="#home">Início</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>📧 contato@teuigbonito.com.br</p>
          <p>📱 (53) 99999-9999</p>
          <p>📍 Jaguarão, RS - Brasil</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Teu IG Bonito. Todos os direitos reservados. | Desenvolvido com 💜</p>
      </div>
    </footer>
  )
}

export default Footer
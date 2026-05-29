import React from 'react'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { Mail, MapPin, Phone, Link2 } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Teu IG Bonito</h4>
          <p>Agência especializada em marketing digital e engajamento no Instagram. Transformamos perfis em negócios lucrativos.</p>
         
        </div>
        <div className="footer-section">
          <h4>Serviços</h4>
          <a href="#servicos">Social Media</a>
          <a href="#servicos">Videomaker</a>
          <a href="#servicos">Storymaker</a>
          {/* <a href="#servicos">Tráfego Pago</a> */}
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <a href="#home">Início</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#depoimentos">Depoimentos</a>
          {/* <a href="#contato">Contato</a> */}
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p><Mail size={16} /> contato@teuigbonito.com.br</p>
          <p><Phone size={16} /> (53) 92000-4255</p>
          <p><MapPin size={16}/> Jaguarão, RS - Brasil</p>
           <div className="social-links">
            <a 
              href="https://www.instagram.com/teuigbonitoo/" 
              className="social-link" 
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram size={18}/>
            </a>
            <a 
              href="https://linktr.ee/teuigbonito" 
              className="social-link" 
              aria-label="Linktree" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Link2 size={18}/>
            </a>
            <a 
              href="https://wa.me/5553920004255" 
              className="social-link" 
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Teu IG Bonito. Todos os direitos reservados. | Desenvolvido com 💜</p>
      </div>
    </footer>
  )
}

export default Footer
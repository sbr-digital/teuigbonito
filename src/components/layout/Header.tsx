import React from 'react'

interface HeaderProps {
  onMenuToggle: () => void
  isMenuOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href="#home">
          <img 
            src="/TEU IG 9.png" 
            alt="Teu IG Bonito" 
            className="logo-image"
          />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          {/* <li><a href="#contato">Contato</a></li> */}
        </ul>
        <button 
          className="menu-toggle" 
          onClick={onMenuToggle}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
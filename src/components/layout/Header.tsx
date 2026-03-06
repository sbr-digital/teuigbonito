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
          <img 
            src="/logo-black.svg" 
            alt="Teu IG Bonito" 
            className="logo-image"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
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
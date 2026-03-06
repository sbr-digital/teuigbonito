import React, { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '#home', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' }
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      {menuItems.map((item) => (
        <a 
          key={item.href} 
          href={item.href} 
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

export default MobileMenu
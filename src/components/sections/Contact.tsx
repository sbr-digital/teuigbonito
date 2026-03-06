import React, { FormEvent, useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // WhatsApp integration
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`
    const whatsappURL = `https://wa.me/5553999999999?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappURL, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    
    alert('Redirecionando para o WhatsApp...')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contato" className="contact">
      <div className="section-header">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos no Instagram</p>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">WhatsApp</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react'
import swalWithCustomClass from '../../utils/swalInstance'
import './Footer.css'
import { useState } from 'react'
import '../../utils/custom-alerts.css'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscription = (event) => {
    event.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      swalWithCustomClass.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor, ingresa un correo electrónico válido.',
        confirmButtonText: 'Intentar de nuevo'
      })
      return
    }

    swalWithCustomClass.fire({
      icon: 'success',
      title: '¡Suscripción exitosa!',
      text: 'Ya estás suscrito, pronto te llegarán las notificaciones.',
      confirmButtonText: 'Aceptar'
    })

    setEmail('')
  }

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Cat Explorer</h3>
          <p className='footer-description'>
            Explora el fascinante mundo de los gatos. Encuentra información
            sobre razas, cuidados y todo lo que necesitas saber sobre tu felino
            favorito.
          </p>
          <div className='social-links'>
            <a href='https://www.facebook.com/' aria-label='Facebook'>
              <FacebookIcon className='icon' />
            </a>
            <a href='https://x.com/' aria-label='Twitter'>
              <TwitterIcon className='icon' />
            </a>
            <a href='https://www.instagram.com/' aria-label='Instagram'>
              <InstagramIcon className='icon' />
            </a>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Contacto</h4>
          <div className='contact-info'>
            <p>
              <Mail className='contact-icon' /> info@catexplorer.com
            </p>
            <p>
              <Phone className='contact-icon' /> +1 234 567 890
            </p>
            <p>
              <MapPin className='contact-icon' /> Ciudad Gatuna, CP 12345
            </p>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Newsletter</h4>
          <p>Suscríbete para recibir noticias y actualizaciones</p>
          <form className='newsletter-form' onSubmit={handleSubscription}>
            <input
              type='email'
              placeholder='Tu correo electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit'>Suscribirse</button>
          </form>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          Cat Explorer © {new Date().getFullYear()} | Hecho con{' '}
          <Heart className='heart-icon' /> por amantes de los gatos
        </p>
      </div>
    </footer>
  )
}

export default Footer

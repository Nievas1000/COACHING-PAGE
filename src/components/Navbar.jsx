import { useEffect, useState } from 'react'
import image from '../assets/logo.png'

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('scroll', onScroll)
    }
  }, [isMenuOpen])

  return (
    <div className={`navbar-container w-100 ${scroll ? 'scrolled' : ''}`}>
      <nav className={`container navbar navbar-expand-lg navbar-dark navbar-transparent w-100 ${scroll ? 'scrolled' : ''}`}>
        <a className='navbar-brand' href='#'>
          <img className='pt-2' src={image} alt='Logo' height='50' />
        </a>

        <button className='navbar-toggler' onClick={() => setMenuOpen(!isMenuOpen)}>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Mastermind</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Coaching</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Speaking</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Books</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Blog</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Resources</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

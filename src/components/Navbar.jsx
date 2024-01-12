import { useEffect, useState } from 'react'
import image from '../assets/logo.png'
import { Link } from 'react-router-dom'

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
        <Link className='navbar-brand' to='/'>
          <img className='pt-2' src={image} alt='Logo' height='50' />
        </Link>

        <button className='navbar-toggler' onClick={() => setMenuOpen(!isMenuOpen)}>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/books'>Books</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>Articles</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>Newsletter</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>Quotes</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>Speaking</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

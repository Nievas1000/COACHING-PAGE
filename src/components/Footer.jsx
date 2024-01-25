import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='container pt-5'>
      <hr className='my-0' />
      <div className='d-flex justify-content-center row pb-5'>
        <div className='col-lg-4 col-md-6'>
          <div className='pt-4'>
            <div className='d-flex justify-content-center d-block'>
              <img className='pt-2 img-fluid' src={logo} alt='Logo' height='50' />
            </div>
            <p className='pt-3 text-center'>My work has been featured in places like Time magazine, the New York Times, the Wall Street Journal and on CBS This Morning.</p>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center col-md-2 pt-4 links-navbar'>
          <div>
            <h6>About James</h6>
            <p><a href='https://jamesclear.com/3-2-1'>Newsletter</a></p>
            <p><Link to='/quotes'>Quotes</Link></p>
            <p><a href='https://jamesclear.com/events'>Speaking</a></p>
            <p><Link to='/books'>Books</Link></p>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center col-md-2 pt-4 d-flex links-navbar'>
          <div>
            <h6>Social medias</h6>
            <p><a href='https://www.instagram.com/jamesclear/'><FaInstagram size={23} /></a></p>
            <p><a href='https://twitter.com/JamesClear?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><FaTwitter size={23} /></a></p>
            <p><a href='https://www.linkedin.com/in/jamesclear/'><FaLinkedin size={23} /></a></p>
            <p><a href='https://www.youtube.com/channel/UC3UPXvR5TAVFL18ACyoW0RQ'><FaYoutube size={23} /></a></p>
          </div>
        </div>
      </div>
      <hr className='my-0' />
    </div>
  )
}

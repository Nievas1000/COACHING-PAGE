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
            <h6>Must see</h6>
            <p><a>Mastermind</a></p>
            <p><a>Coaching</a></p>
            <p><a>Blog</a></p>
            <p><a>Resources</a></p>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center col-md-2 pt-4 links-navbar'>
          <div>
            <h6>About James</h6>
            <p><a>Newsletter</a></p>
            <p><a>Quotes</a></p>
            <p><a>Speaking</a></p>
            <p><a>Books</a></p>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center col-md-2 pt-4 d-flex links-navbar'>
          <div>
            <h6>Social medias</h6>
            <p><a><FaInstagram size={23} /></a></p>
            <p><a><FaTwitter size={23} /></a></p>
            <p><a><FaLinkedin size={23} /></a></p>
            <p><a><FaYoutube size={23} /></a></p>
          </div>
        </div>
      </div>
      <hr className='my-0' />
    </div>
  )
}

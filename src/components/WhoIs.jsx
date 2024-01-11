import image from '../assets/who-clear.png'
import imagedquote from '../assets/clare-dquote.png'

export const WhoIs = () => {
  return (
    <div>
      <div className='d-block d-md-flex justify-content-center w-100 container-who'>
        <div className='who d-block d-md-flex'>
          <div className='col-md-6'>
            <h3>Who is</h3>
            <h2>James Clear?</h2>
            <p>James Clear is a speaker and bestselling writer focused on habits, decision making, and continuous improvement. He is the author of the #1 New York Times bestseller, Atomic Habits, which he has translated into more than 50 languages and sold more than 5 million copies.</p>
            <div className='pt-3 pb-5'>
              <button className='btn primary-color p-3'>Learn more about James</button>
            </div>
          </div>
          <div>
            <img className='img-fluid' src={image} alt='Logo' />
          </div>
        </div>
      </div>
      <div className='container-testimonial pt-5'>
        <div className='container d-flex justify-content-end'>
          <img className='img-fluid' src={imagedquote} alt='Logo' />
        </div>
        <div className='container position-relative'>
          <p>"James Clear has spent years researching habits and how they can change our lives. This book is an easy-to-follow guide to changing your habits and changing your life."</p>
          <span>Adam Grant, organizational psychologist and author.</span>
        </div>
      </div>
    </div>
  )
}

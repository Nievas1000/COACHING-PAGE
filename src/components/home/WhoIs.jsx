import image from '../../assets/who-clear.png'
import imagedquote from '../../assets/clare-dquote.png'

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
          <p>"“James is a strong, confident facilitator and his message was easily understood by the audience. He did a great job teaching and facilitating a conversation with our group about habits. It was a great experience and our team got a lot of valuable ideas from the time spent.”</p>
          <span>
            Laura Blanchard, North America Training Manager at Lululemon.
          </span>
        </div>
      </div>
    </div>
  )
}

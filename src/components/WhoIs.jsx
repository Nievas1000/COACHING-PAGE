import image from '../assets/who-goggins.jpg'
import imagedquote from '../assets/goggins-dquote.png'

export const WhoIs = () => {
  return (
    <div>
      <div className='d-block d-md-flex justify-content-center w-100 container-who'>
        <div className='who d-block d-md-flex'>
          <div className='col-md-6'>
            <h3>Who is</h3>
            <h2>David Goggins?</h2>
            <p>David Goggins is a retired United States Navy SEAL and former United States Air Force Tactical Air Control Party member who has gained recognition for his remarkable feats of physical and mental endurance. Born on February 17, 1975, in Buffalo, New York, Goggins faced many challenges in his early life, including health issues, obesity, and a difficult upbringing.</p>
            <div className='pt-3 pb-5'>
              <button className='btn primary-color'>Learn more about David</button>
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
          <p>"David Goggins is not just a story of self-improvement, he is a human demolition machine who refuses to be limited by anyone or anything."</p>
          <span>Rich Roll, endurance athlete and author</span>
        </div>
      </div>
    </div>
  )
}

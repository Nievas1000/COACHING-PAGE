import image from '../assets/speaker.png'

export const Speaker = () => {
  return (
    <div className='container pt-5'>
      <div className='d-flex justify-content-center'>
        <img className='img-fluid img-speaker' src={image} />
      </div>
    </div>
  )
}

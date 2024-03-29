import image from '../../assets/idea.png'

export const HomeImageInfo = () => {
  return (
    <div className='h-100 d-flex align-items-center'>
      <div className='col-12 col-md-6 text-brown'>
        <h1>‘AN EASY & PROVEN WAY TO BUILD GOOD HABITS & BREAK BAD ONES’</h1>
        <div className='d-block d-md-flex pt-5'>
          <div className='d-flex justify-content-center'>
            <img className='pt-2' src={image} alt='Logo' height='200' />
          </div>
          <div className='text-center col-12 col-md-6 mx-auto'>
            <h3>Is your Expert Business ready to scale?</h3>
            <p className='pt-2'>
              Discover your scalability score and reveal EXACTLY what you need to focus on
              to take your business to the next level!
            </p>
          </div>
        </div>
      </div>

      <div className='d-none d-md-flex h-100 pb-5 align-items-end justify-content-end text-white'>
        <div className='w-50 text-center ps-5'>
          <h5 className='pb-4'>“James Clear is
            Changing the Game of online entrepreneurship!”
          </h5>
          <h2>Success</h2>
        </div>
      </div>
    </div>
  )
}

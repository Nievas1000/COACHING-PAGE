import image from '../../assets/speaker.png'

export const Speaker = () => {
  return (
    <div className='container pt-5'>
      <div className='d-flex justify-content-center pt-5'>
        <img className='img-fluid img-speaker' src={image} />
      </div>
      <div className='d-flex justify-content-center text-center pt-5'>
        <div className='w-75'>
          <h2>I am occasionally asked to speak at companies, conferences, or private events.</h2>
          <p className='pt-3'>Previous clients include Amazon, American Express, ADP, AT&T, Autodesk, Capital One, Cisco, Deloitte, Disney, ESPN, Facebook, General Dynamics, General Electric, Google, Honda, IKEA, JPMorgan Chase, Intel, LinkedIn, Lululemon, Mastercard, McKinsey & Company, Merrill Lynch, Microsoft, Pfizer, Procter & Gamble, Stanford Medical Center, State Farm, Zapier, and many more.</p>
          <div className='d-flex justify-content-center pt-4 pb-4'>
            <button className='btn primary-color text-white p-3'>BOOK JAMES TO SPEAK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Speaker } from '../components/home/Speaker'

export const Quotes = () => {
  return (
    <div>
      <div className='background-quote-page'>
        <div className='container pt-2 h-100'>
          <div className='d-flex justify-content-start align-items-center h-100'>
            <div>
              <h1 className='background-title'>Quotes</h1>
              <p className='w-50'>
                Embark on a journey of inspiration with our Quotes section. Elevate your spirit and find motivation in every visit. Explore the wisdom encapsulated in powerful and insightful thoughts from leaders, thinkers, and visionaries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='pt-5'>Quotes</h1>
        <div className='pt-5'>
          <div className='quote w-75'>
            <p className='quote-text pt-3'>“Life is a series of seasons, and what works in one season may not work in the next. What season are you in right now? What habits does that season require?” </p>
            <p className='quote-name pt-3'>– James Clear</p>
            <div className='quote-footer pt-3'>
              <span>March 10, 2022</span>
              <a href='https://jamesclear.com/3-2-1/march-10-2022' className='ms-3 news-letter'>3-2-1 NEWSLETTER</a>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='quote w-75'>
            <p className='quote-text pt-3'>“A brief guide to compounding: If you don’t enjoy something, you won’t stick with it. If you don’t stick with it, it won’t compound. Being interested precedes the results.”
            </p>
            <p className='quote-name pt-3'>– James Clear</p>
            <div className='quote-footer pt-3'>
              <span>DECEMBER 16, 2021</span>
              <a href='https://jamesclear.com/3-2-1/december-16-2021' className='ms-3 news-letter'>3-2-1 NEWSLETTER</a>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='quote w-75'>
            <p className='quote-text pt-3'>“When working with people, assume good intentions. When listening to people, interpret their words in a generous way. You will occasionally get burned and mistreated by always assuming the best in others, but it is a far better way to live than the opposite.”</p>
            <p className='quote-name pt-3'>– James Clear</p>
            <div className='quote-footer pt-3'>
              <span>JANUARY 27, 2022</span>
              <a href='https://jamesclear.com/3-2-1/january-27-2022' className='ms-3 news-letter'>3-2-1 NEWSLETTER</a>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='quote w-75'>
            <p className='quote-text pt-3'>“Make mistakes, just don’t make them permanent.”</p>
            <p className='quote-name pt-3'>– James Clear</p>
            <div className='quote-footer pt-3'>
              <span>AUGUST 18, 2022</span>
              <a href='https://jamesclear.com/3-2-1/august-18-2022' className='ms-3 news-letter'>3-2-1 NEWSLETTER</a>
            </div>
          </div>
        </div>
      </div>
      <Speaker />
    </div>
  )
}

import capital from '../assets/companies/capital.png'
import honda from '../assets/companies/honda.png'
import intel from '../assets/companies/intel.png'

export const About = () => {
  return (
    <div>
      <div className='background-about-page'>
        <div className='container pt-2 h-100'>
          <div className='d-flex justify-content-start align-items-center h-100'>
            <div>
              <h1 className='background-title'>James Clear</h1>
              <p className='w-50'>
                I’m the author of the #1 New York Times bestseller, Atomic Habits, which has sold more than 15 million copies worldwide. My work has been featured in places like Time magazine, the New York Times, the Wall Street Journal and on CBS This Morning. Click here to learn more about me and my work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-about-info'>
        <div className='container'>
          <div className='row pt-5'>
            <div className='col-md-6 d-flex justify-content-center align-items-center p-5'>
              <div>
                <h1>Hi, I'm James Clear</h1>
                <p className='w-75 pt-5'>I’ve been writing at JamesClear.com about habits, decision making, and continuous improvement since 2012. I’m the author of the #1 New York Times bestseller, Atomic Habits, which has sold more than 15 million copies worldwide and has been translated into more than 50 languages. I’m also known for my popular 3-2-1 newsletter, which is sent out each week to more than 3 million subscribers. Click here to learn more and sign up.</p>
                <p className='pt-3'>You can find me elsewhere on Twitter and Instagram.</p>
              </div>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center p-5'>
              <ul>
                <li>Author of Atomic Habits</li>
                <li>Creator of 3-2-1 newsletter</li>
                <li>Speaker at major companies and events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container w-50 pt-5 container-benefits'>
        <h1>How My Work Will Benefit You</h1>
        <p>I’m an advocate for useful ideas. The central question I explore through my work is, “How can we live better?”</p>
        <p>In other words, I want to find great ideas and explain them in a way that is easy to use and apply to daily life.</p>
        <p>My writing focuses on topics like…</p>
        <ul>
          <li>How to start (and stick to) good habits</li>
          <li>How to make good choices and avoid bad ones</li>
          <li>How to accomplish more in less time</li>
          <li>How to create better systems and processes</li>
          <li>How to achieve meaningful results without overwhelming yourself</li>
        </ul>
        <p>Most of the concepts I write about aren’t my own. They are ideas I discover and build upon after many hours of reading and research. I look for insights from all fields: architecture, biology, economics, history, mathematics, physics, philosophy, and more. I consider it my job to find the best ideas and explain them in a way that is actionable and easy-to-understand.</p>
      </div>

      <div className='container'>
        <h1 className='d-flex justify-content-center pt-5 pb-5'>Work With</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow company-container'>
              <img className='card-img-top img-fluid' src={capital} alt='Card image cap' />
              <div className='card-body p-3'>
                <div className='line-company' />
                <h4 className='card-title d-flex justify-content-center'>Capital One</h4>
                <p className='card-text text-center pt-3 pb-3'>Capital One Financial Corporation is an American bank holding company specializing in credit cards, auto loans, banking, and savings accounts, headquartered in McLean, Virginia with operations primarily in the United States</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow company-container'>
              <img className='card-img-top img-fluid' src={honda} alt='Card image cap' />
              <div className='card-body p-3'>
                <div className='line-company' />
                <h4 className='card-title d-flex justify-content-center'>Honda</h4>
                <p className='card-text text-center pt-3 pb-3'>Honda Motor Co., Ltd. 本田技研工業株式会社, Honda Giken Kōgyō Kabushiki gaisha, lit. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and battery-powered equipment, headquartered in Minato, Tokyo, Japan.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow company-container'>
              <img className='card-img-top img-fluid' src={intel} alt='Card image cap' />
              <div className='card-body p-3'>
                <div className='line-company' />
                <h4 className='card-title d-flex justify-content-center'>Intel</h4>
                <p className='card-text text-center pt-3 pb-3'>Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California. It is one of the world's largest semiconductor chip manufacturers by revenue.[3][4] Intel supplies microprocessors for most manufacturers of computer systems, and is one of the developers of the x86 series of instruction sets found in most personal computers (PCs)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container container-recomendation pt-5'>
        <h1 className='d-flex justify-content-center'>Other Projects and Interests</h1>
        <div className='row pt-5'>
          <div className='col-md-4'>
            <h3>Architecture.</h3>
            <p>I love thoughtful, well-designed buildings. Specifically, I enjoy layouts that blend nature with beautiful and functional homes and urban spaces.</p>
          </div>
          <div className='col-md-4'>
            <h3>Book recommendations.</h3>
            <p>It’s basically my job to read. After years of research, I created <a className='recomendation-links' href='https://jamesclear.com/best-books'>my personal reading list</a> with favorites from a wide-range of categories including the <a className='recomendation-links' href='https://jamesclear.com/best-books/business'>best business books</a>, <a className='recomendation-links' href='https://jamesclear.com/best-books/self-help'>best self-help books</a>, best biographies, and more.</p>
          </div>
          <div className='col-md-4'>
            <h3>Great speeches.</h3>
            <p>As a side project, I like to search for insightful speeches that are not well known. Whenever I find a gem, I create a transcript and add it to <a className='recomendation-links' href='https://jamesclear.com/great-speeches'>my list of great speeches</a>. To the best of my knowledge, this is the only place on the web where you can find all of these amazing speeches in one place.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

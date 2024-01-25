import creativeIdea from '../../assets/content/creative-ideas.jpg'
import sayNo from '../../assets/content/say-no.jpg'
import focus from '../../assets/content/focus.jpg'
import trackHabits from '../../assets/content/track-habits.jpg'
import stayMotivated from '../../assets/content/stay-motivated.jpg'
import hardWork from '../../assets/content/hard-work.jpg'
import { Link } from 'react-router-dom'

export const LatestContent = () => {
  return (
    <div className='background-content'>
      <div className='container pt-5 container-content'>
        <h1 className='d-flex justify-content-center pb-5'>Latest Content</h1>
        <div className='row'>
          <div className='col-md-4'>
            <a href='https://jamesclear.com/five-step-creative-process'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={creativeIdea} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>For a More Creative Brain Follow These 5 Steps</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4'>
            <a href='https://jamesclear.com/saying-no'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={sayNo} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>The Ultimate Productivity Hack is Saying No</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4'>
            <a href='https://jamesclear.com/getting-simple'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={focus} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>How Experts Figure What to Focus On</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 pt-4'>
            <a href='https://jamesclear.com/habit-tracker'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={trackHabits} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>The Ultimate Habit Tracker Guide: Why and How to Track Your Habits</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 pt-4'>
            <a href='https://jamesclear.com/goldilocks-rule'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={stayMotivated} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>The Goldilocks Rule: How to Stay Motivated in Life and Business</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 pt-4'>
            <a href='https://jamesclear.com/luck-vs-hard-work'>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={hardWork} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>Absolute Success is Luck. Relative Success is Hard Work.</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Link to='/articles' className='d-flex justify-content-center pt-4 pb-4'>
          <button className='btn primary-color text-white p-3'>MORE FROM JAMES</button>
        </Link>
      </div>
    </div>
  )
}

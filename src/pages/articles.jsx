import main from '../assets/articles/main.jpg'
import creativeIdea from '../assets/content/creative-ideas.jpg'
import sayNo from '../assets/content/say-no.jpg'
import { ScrollAnimationContainer } from '../components/home/ScrollContainer'

export const Articles = () => {
  return (
    <div>
      <div className='background-articles-page'>
        <div className='container pt-2 h-100'>
          <div className='d-flex justify-content-start align-items-center h-100'>
            <div>
              <h1>Articles</h1>
              <p className='w-50'>
                This page shares my best articles to read on topics like health, happiness, creativity, productivity and more.
                The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='d-flex justify-content-center pt-5 pb-5'>All articles</h1>
        <a href='https://jamesclear.com/the-downside-of-being-effective' className='d-flex justify-content-center'>
          <div className='card shadow w-75'>
            <img className='card-img-top img-fluid' src={main} alt='Card image cap' />
            <div className='card-body p-3'>
              <h4 className='card-title'>When the 80/20 Rule Fails: The Downside of Being Effective.</h4>
              <p className='card-text pt-3 pb-3'>Nearly all great ideas follow a similar creative process and this article explains how this process works. Understanding this is important because creative thinking is one of the most useful skills you can possess.</p>
            </div>
          </div>
        </a>
        <div className='row pt-5 pb-5 d-flex justify-content-center'>
          <a href='https://jamesclear.com/five-step-creative-process' className='col-md-4'>
            <ScrollAnimationContainer direction='x' initial={-800}>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={creativeIdea} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>For a More Creative Brain Follow These 5 Steps</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </ScrollAnimationContainer>
          </a>
          <a href='https://jamesclear.com/saying-no' className='col-md-4'>
            <ScrollAnimationContainer direction='x' initial={800}>
              <div className='card shadow'>
                <img className='card-img-top img-fluid' src={sayNo} alt='Card image cap' />
                <div className='card-body p-3'>
                  <h4 className='card-title'>The Ultimate Productivity Hack is Saying No</h4>
                  <p className='card-text view-post pt-3 pb-3'>VIEW POST</p>
                </div>
              </div>
            </ScrollAnimationContainer>
          </a>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={-800}>
              <h2>Creativity</h2>
              <a href='https://jamesclear.com/five-step-creative-process'>For a More Creative Brain Follow These 5 Steps.</a>
              <a href='https://jamesclear.com/stay-on-the-bus'>The Proven Path to Doing Unique and Meaningful Work</a>
              <a href='https://jamesclear.com/creative-thinking'>Creativity Is a Process, Not an Event</a>
            </ScrollAnimationContainer>
          </div>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={800}>
              <h2>Decision Making</h2>
              <a href='https://jamesclear.com/saying-no'>The Ultimate Productivity Hack is Saying No</a>
              <a href='https://jamesclear.com/why-facts-dont-change-minds'>Why Facts Don’t Change Our Minds</a>
              <a href='https://jamesclear.com/dont-start-from-scratch'>How Innovative Ideas Arise</a>
            </ScrollAnimationContainer>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={-800}>
              <h2>Focus</h2>
              <a href='https://jamesclear.com/saying-no'>The Ultimate Productivity Hack is Saying No</a>
              <a href='https://jamesclear.com/getting-simple'>How Experts Figure What to Focus On</a>
              <a href='https://jamesclear.com/creative-thinking'>Zanshin: Learning the Art of Attention and Focus From a Legendary Samurai Archer</a>
            </ScrollAnimationContainer>
          </div>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={800}>
              <h2>Habits</h2>
              <a href='https://jamesclear.com/one-sentence-habits'>30 One-Sentence Stories From People Who Have Built Better Habits</a>
              <a href='https://jamesclear.com/habit-tracker'>The Ultimate Habit Tracker Guide: Why and How to Track Your Habits</a>
              <a href='https://jamesclear.com/journaling-one-sentence'>The Surprising Benefits of Journaling One Sentence Every Day</a>
            </ScrollAnimationContainer>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={-800}>
              <h2>Life Lessons</h2>
              <a href='https://jamesclear.com/saying-no'>The Ultimate Productivity Hack is Saying No</a>
              <a href='https://jamesclear.com/the-downside-of-being-effective'>When the 80/20 Rule Fails: The Downside of Being Effective</a>
              <a href='https://jamesclear.com/luck-vs-hard-work'>Absolute Success is Luck. Relative Success is Hard Work.</a>
            </ScrollAnimationContainer>
          </div>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={800}>
              <h2>Motivation</h2>
              <a href='https://jamesclear.com/goldilocks-rule'>The Goldilocks Rule: How to Stay Motivated in Life and Business</a>
              <a href='https://jamesclear.com/kasparov-confidence'>World Chess Champion Garry Kasparov on How to Build Confidence</a>
              <a href='https://jamesclear.com/giving-up'>What I Do When I Feel Like Giving Up</a>
            </ScrollAnimationContainer>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={-800}>
              <h2>Productivity</h2>
              <a href='https://jamesclear.com/the-downside-of-being-effective'>When the 80/20 Rule Fails: The Downside of Being Effective</a>
              <a href='https://jamesclear.com/reading-comprehension-strategies'>7 Ways to Retain More of Every Book You Read</a>
              <a href='https://jamesclear.com/five-step-creative-process'>For a More Creative Brain Follow These 5 Steps</a>
            </ScrollAnimationContainer>
          </div>
          <div className='col-md-6 p-4'>
            <ScrollAnimationContainer direction='x' initial={800}>
              <h2>Self-Improvement</h2>
              <a href='https://jamesclear.com/reading-comprehension-strategies'>7 Ways to Retain More of Every Book You Read</a>
              <a href='https://jamesclear.com/beginners-guide-deliberate-practice'>The Beginner’s Guide to Deliberate Practice</a>
              <a href='https://jamesclear.com/master-one-thing'>The Scientific Argument for Mastering One Thing at a Time</a>
            </ScrollAnimationContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

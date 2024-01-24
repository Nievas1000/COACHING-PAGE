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
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <h2>Creativity</h2>
            <p>For a More Creative Brain Follow These 5 Steps.</p>
            <p>The Proven Path to Doing Unique and Meaningful Work</p>
            <p>Creativity Is a Process, Not an Event</p>
          </div>
          <div className='col-md-6 p-4'>
            <h2>Decision Making</h2>
            <p>The Ultimate Productivity Hack is Saying No</p>
            <p>Why Facts Don’t Change Our Minds</p>
            <p>How Innovative Ideas Arise</p>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <h2>Focus</h2>
            <p>The Ultimate Productivity Hack is Saying No</p>
            <p>How Experts Figure What to Focus On</p>
            <p>Zanshin: Learning the Art of Attention and Focus From a Legendary Samurai Archer</p>
          </div>
          <div className='col-md-6 p-4'>
            <h2>Habits</h2>
            <p>30 One-Sentence Stories From People Who Have Built Better Habits</p>
            <p>The Ultimate Habit Tracker Guide: Why and How to Track Your Habits</p>
            <p>The Surprising Benefits of Journaling One Sentence Every Day</p>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <h2>Life Lessons</h2>
            <p>The Ultimate Productivity Hack is Saying No</p>
            <p>When the 80/20 Rule Fails: The Downside of Being Effective</p>
            <p>Absolute Success is Luck. Relative Success is Hard Work.</p>
          </div>
          <div className='col-md-6 p-4'>
            <h2>Motivation</h2>
            <p>The Goldilocks Rule: How to Stay Motivated in Life and Business</p>
            <p>World Chess Champion Garry Kasparov on How to Build Confidence</p>
            <p>What I Do When I Feel Like Giving Up</p>
          </div>
        </div>
        <div className='row articles p-5'>
          <div className='col-md-6 p-4'>
            <h2>Productivity</h2>
            <p>When the 80/20 Rule Fails: The Downside of Being Effective</p>
            <p>7 Ways to Retain More of Every Book You Read</p>
            <p>For a More Creative Brain Follow These 5 Steps</p>
          </div>
          <div className='col-md-6 p-4'>
            <h2>Self-Improvement</h2>
            <p>7 Ways to Retain More of Every Book You Read</p>
            <p>The Beginner’s Guide to Deliberate Practice</p>
            <p>The Scientific Argument for Mastering One Thing at a Time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import atomicHabits from '../../assets/books/atomic-habits-full.png'
import habitJournal from '../../assets/books/habit-journal.png'

export const BooksInfo = () => {
  return (
    <div>
      <div className='background-book-one'>
        <div className='container d-block d-md-flex justify-content-center align-items-center gap-5 h-100'>
          <img src={atomicHabits} className='img-fluid' />
          <div className='col-md-6'>
            <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
            <p className='pt-3'>
              My first book, Atomic Habits, offers a proven framework for getting 1 percent better every day. It’s the ultimate guide on how to design a system where good habits emerge naturally and unwanted habits fade away.
            </p>
            <div>
              <p className='fw-bold'>A supremely practical and useful book. James Clear distills the most fundamental information about habit formation, so you can accomplish more by focusing on less</p>
              <p className='d-flex justify-content-end mb-0'>Mark Manson</p>
              <p className='d-flex justify-content-end'>#1 New York Times best-selling author</p>
            </div>
            <div>
              <p className='fw-bold'>As a physician attempting to help my patients build healthy habits to decrease and reverse chronic disease, Atomic Habits is the playbook I have been searching for. Not only does the book offer actionable items I can teach my patients, I can refer them to read and implement the ideas themselves. The format is powerful and simple. This should be taught in all medical schools.</p>
              <p className='d-flex justify-content-end mb-0'>Laurie Marbas</p>
              <p className='d-flex justify-content-end'>Physician and United States Air Force veteran</p>
            </div>
          </div>
        </div>
      </div>

      <div className='background-book-two'>
        <div className='container d-block d-md-flex justify-content-center align-items-center gap-5 h-100'>
          <img src={habitJournal} className='img-fluid' />
          <div className='col-md-6'>
            <h2>The Clear Habit Journal: A combination daily journal, dot grid notebook, and habit tracker created in partnership with premium notebook-maker Baronfig.</h2>
            <p className='pt-3'>
              The Clear Habit Journal is a combination dot grid notebook, daily journal, and habit tracker. The design of the notebook came out of months of research that I did about what makes journals effective and what kinds of measurements and tracking are helpful for building habits.
            </p>
            <p>I’ve tried dozens of other notebooks and methods in the past. The habit journal is designed to resolve many of the common problems that plague other notebooks and journals on the market.</p>
            <p>Most regular notebooks are too minimal. They leave it up to you to write page numbers, count dots, draw lines, and establish a structure on your own. And they certainly don’t give you a format or tracker for sticking with your habits.</p>
            <p>Meanwhile, most guided notebooks and productivity systems are too structured. They lock you into their format and give you no room for flexibility. You’re forced to answer specific questions or fit your answers into a confined amount of space. If you want to do anything outside the norm or make it your own, the notebook becomes useless.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

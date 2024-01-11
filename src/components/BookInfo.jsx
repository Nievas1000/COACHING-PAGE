import atomiHabits from '../assets/books/atomic-habits.png'
import habitJournal from '../assets/books/habit-journal.png'

export const BookInfo = () => {
  return (
    <div className='background-books d-flex align-items-center mt-5 text-brown'>
      <div className='container container-info-book'>
        <div className='book-info pb-4'>
          <h3>Bestselling</h3>
          <h2>Books</h2>
          <p>In the book, Goggins recounts his difficult upbringing, including physical and emotional abuse, and how he overcame those challenges to become one of the toughest and most accomplished endurance athletes in the world.</p>
        </div>
        <div className='justify-content-center'>
          <div className='container-book text-center'>
            <img className='img-fluid' src={atomiHabits} alt='Logo' />
            <div className='book-description'>
              <h4 className='text-bold'>Master Your Mind and Defy the Odds</h4>
              <p>In this groundbreaking book, he reveals exactly how those tiny changes can grow to change our careers, our relationships, and every aspect of our lives.</p>
              <div className='d-flex justify-content-center'>
                <button className='btn primary-color p-2 w-50 d-flex justify-content-center'>More info</button>
              </div>
            </div>
          </div>
          <div className='container-book text-center pt-5'>
            <img className='img-fluid pe-4' src={habitJournal} alt='Logo' />
            <div className='book-description'>
              <h4 className='text-bold'>Build Better Habits to Reach Your Goals</h4>
              <p>The Habit Journal is your power tool to live your life with intention and de-clutter your day-to-day to achieve your dreams. With a structured format to help you create productive habits to achieve your goals, it offers a monthly habit planner, a daily journal, a monthly habit review, and a habit tracker.</p>
              <div className='d-flex justify-content-center'>
                <button className='btn primary-color p-2 w-50 d-flex justify-content-center'>More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

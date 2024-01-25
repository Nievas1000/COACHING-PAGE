import { BookImageInfo } from '../components/books/BookImageInfo'
import { BooksInfo } from '../components/books/BooksInfo'

export const Books = () => {
  return (
    <div>
      <BookImageInfo />
      <BooksInfo />
      <div className='container pt-5 pb-5'>
        <div className='d-flex justify-content-center text-center'>
          <h1>You can think of my weekly articles as the place where I share incremental lessons on how to build habits that stick and live better. I share the lessons I learn week-by-week in my stories and articles. Meanwhile, my books are where I share more comprehensive analysis on these topics.</h1>
        </div>
        <a href='https://jamesclear.com/books' className='d-flex justify-content-center pt-5 pb-5'>
          <button className='btn primary-color p-3'>Learn more about these books</button>
        </a>
      </div>
    </div>
  )
}

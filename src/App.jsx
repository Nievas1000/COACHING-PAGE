import { HomeImageInfo } from './components/HomeImageInfo'
import { Insignia } from './components/Insignia'
import { Navbar } from './components/Navbar'
import { WhoIs } from './components/WhoIs'
import bookimage from './assets/cant-hurt.jpg'

function App () {
  return (
    <div>
      <div className='background-home'>
        <Navbar />
        <div className='container pt-2 h-100'>
          <HomeImageInfo />
        </div>
      </div>
      <Insignia />
      <WhoIs />
      <div className='background-books d-flex align-items-center mt-5'>
        <div className='d-block d-md-flex container'>
          <div className='container-book-info pb-4 col-12 col-md-4'>
            <h3>Bestselling</h3>
            <h2>Book</h2>
            <p>Chris believes that publishing a book is an absolute must if you want to position yourself as a leader in your industry. It’s your way of leaving your stamp on the world! So, it’s only right that he does likewise.</p>
          </div>
          <div className='d-flex container-book ps-3 col-12 col-md-6'>
            <img className='img-fluid' src={bookimage} alt='Logo' />
            <div className='pt-5 ps-4'>
              <h4 className='text-white text-bold'>Master Your Mind and Defy the Odds</h4>
              <p>In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities.</p>
              <button className='btn primary-color'>More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

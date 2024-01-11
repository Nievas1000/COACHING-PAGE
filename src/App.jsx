import { HomeImageInfo } from './components/HomeImageInfo'
import { Insignia } from './components/Insignia'
import { Navbar } from './components/Navbar'
import { WhoIs } from './components/WhoIs'
import { BookInfo } from './components/BookInfo'
import { LatestContent } from './components/LatestContent'
import { Speaker } from './components/Speaker'

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
      <BookInfo />
      <LatestContent />
      <Speaker />
    </div>
  )
}

export default App

import { HomeImageInfo } from '../components/home/HomeImageInfo'
import { Insignia } from '../components/home/Insignia'
import { WhoIs } from '../components/home/WhoIs'
import { BookInfo } from '../components/home/BookInfo'
import { LatestContent } from '../components/home/LatestContent'
import { Speaker } from '../components/home/Speaker'

export const Home = () => {
  return (
    <div>
      <div className='background-home'>
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

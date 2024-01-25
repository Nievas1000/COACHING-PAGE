import { HomeImageInfo } from '../components/home/HomeImageInfo'
import { Insignia } from '../components/home/Insignia'
import { WhoIs } from '../components/home/WhoIs'
import { BookInfo } from '../components/home/BookInfo'
import { LatestContent } from '../components/home/LatestContent'
import { Speaker } from '../components/home/Speaker'
import { ScrollAnimationContainer } from '../components/home/ScrollContainer'

export const Home = () => {
  return (
    <div>
      <div className='background-home'>
        <div className='container pt-2 h-100'>
          <HomeImageInfo />
        </div>
      </div>
      <Insignia />
      <ScrollAnimationContainer direction='y' initial={300}>
        <WhoIs />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer direction='y' initial={300}>
        <BookInfo />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer direction='y' initial={300}>
        <LatestContent />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer direction='y' initial={300}>
        <Speaker />
      </ScrollAnimationContainer>
    </div>
  )
}

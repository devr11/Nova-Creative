import Video from '../comonents/home/Video'
import HomeHeroText from '../comonents/home/HomeHeroText'
import HomeBottom from '../comonents/home/HomeBottom'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className="h-screen w-screen relative pb-1 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home
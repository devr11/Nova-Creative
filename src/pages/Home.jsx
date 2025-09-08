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
        <div className="flex justify-end w-full pr-4">
        <p className="text-white max-w-[18.75rem] text-sm font-[font2] ">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We're transparent, honest and say
          what we mean, and when we believe in something, we're all in.
        </p>
        </div>
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home
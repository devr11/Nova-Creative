import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start:'top 0%',
        end: 'bottom -120%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {

          let imageIndex;

          if(e.progress < 1){
            imageIndex = Math.floor(e.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length - 1
          }
          imgRef.current.src = imageArray[imageIndex]
        }

      }
    })
  })

  return (
    <div>
      <div className='section1 py-1'>
      <div ref={imgDivRef} className='h-[18vw] w-[13vw] rounded-3xl overflow-hidden absolute top-[10rem] left-[32vw]'>
        <img ref={imgRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
      <div className='relative font-[font2]'>
      <div className="mt-[56vh]">
        <h1 className='text-white text-[20vw] leading-[17vw] text-center'>SEVEN7Y <br />
TWO</h1>
      </div>

      <div className='pl-[40%]'>
        <p className='z-20 text-5xl text-white leading-[3.5vw] tracking-wide'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
    </div>

    <div className="section2 h-screen">
    </div>
    </div>
  )
}

export default Agency
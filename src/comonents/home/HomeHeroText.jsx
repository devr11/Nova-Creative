import { useGSAP } from '@gsap/react';
import Video from './Video'
import gsap from 'gsap';

const HomeHeroText = () => {

   useGSAP(() => {
    gsap.fromTo(
      ".spin",
      { strokeDashoffset: 0 },
      {
        strokeDasharray: "425.743px, 0px",
        strokeDashoffset: 1000,
        duration: 3,
        ease: "power4.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <div className='font-[font1] text-white pt-4 text-center'>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
        The spark for
      </div>

      <div className='text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]'>
        all <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'><Video /></div> things
      </div>

      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
        <div className="absolute w-fit h-full mt-[20%] ml-[28vw]">
          <svg viewBox="0 0 233.171875 42.84375" className="w-[60.5%] h-1/2"><ellipse cx="116.5859375" cy="21.421875" rx="114.5859375" ry="19.421875" className="fill-none stroke-[#D3FD50] spin" style={{ strokeDasharray: "425.743px, 425.743px", strokeDashoffset: "0.0006" }}></ellipse></svg>
        </div>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
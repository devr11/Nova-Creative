import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 text-white'>
      <Link to='/projects' className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[7vw] border-3 border-white rounded-full px-10 pt-1'>Work</Link>
      <Link to='/agency' className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[7vw] border-3 border-white rounded-full px-10 pt-1'>Agency</Link>

      {/* <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-10 pt-1 border-white rounded-full uppercase'>
        <Link className='text-[6vw]' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]   flex items-center pt-1 px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw] ' to='/agence'>agence</Link>
      </div> */}
    </div>
  )
}

export default HomeBottom
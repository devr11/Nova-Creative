import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Navbar from './comonents/Navigation/Navbar'
import FullScreenNav from './comonents/Navigation/FullScreenNav'

const App = () => {

  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agency' element={<Agency />} />
      </Routes>
    </div>
  )
}

export default App
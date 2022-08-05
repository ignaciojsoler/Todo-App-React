import Home from './pages/Home'
import { useNavigate } from 'react-router'
import { Routes, Route } from 'react-router'



function App() {

  // const navigate = useNavigate()


  // useEffect(() => {
  //   navigate('/Home')
  // }, [])

  return (
    <div className="font-poppins bg-mobile bg-cover bg-fixed sm:bg-desktop sm:bg-opacity-50">
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

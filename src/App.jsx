import { useEffect } from 'react'
import Home from './pages/Home'
import { useNavigate } from 'react-router'
// import backgroundDesktop from './src/assets/background-desktop.jpg'



function App() {

  const navigate = useNavigate()

  
  useEffect(() => {
    navigate('/Home')
  }, [])
  
  return (
    <div className="font-poppins bg-mobile bg-cover bg-fixed sm:bg-desktop sm:bg-opacity-50">
      <Home />
    </div>
  )
}

export default App

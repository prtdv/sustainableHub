import './index.css'
import Navbar from './Components/home/nav.tsx'
import LandingPage from './Components/home/landingpage.tsx'
import Search from './Components/home/search.tsx'

function App() {
  return (
    <body className='mx-10'>
        <Navbar/>
        <LandingPage/>
        <Search/>
    </body>
  )
}

export default App

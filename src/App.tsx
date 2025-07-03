import './index.css'
import Navbar from './Components/home/nav.tsx'
import LandingPage from './Components/home/landingpage.tsx'
import Search from './Components/home/search.tsx'
import { TableDemo } from './Components/home/demotable.tsx'

function App() {
  return (
    <body className='mx-10'>
        <Navbar/>
        <LandingPage/>
        <Search/>
        <TableDemo/>
    </body>
  )
}

export default App

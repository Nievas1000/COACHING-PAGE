import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Books } from './pages/books'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<Books />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

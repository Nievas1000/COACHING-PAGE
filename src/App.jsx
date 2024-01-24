import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Books } from './pages/books'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Articles } from './pages/articles'
import { Quotes } from './pages/quotes'

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

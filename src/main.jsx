import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/books.css'
import './styles/articles.css'
import './styles/mobile.css'
import './styles/quotes.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

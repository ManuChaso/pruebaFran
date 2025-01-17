import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/home.jsx'
import CatDetails from './components/pages/CatDetails/CatDetails.jsx'
import Header from './components/Header/Header'
import Footer from './components/pages/Footer/Footer.jsx'
import Search from './components/pages/Search/Search'
import Favorites from './components/pages/Favorites/Favorites'
import NotFound from './components/pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cat/:id' element={<CatDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

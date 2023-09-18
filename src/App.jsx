import { Home, DetailPage,AddToCart } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

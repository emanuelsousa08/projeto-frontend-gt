import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout';
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
              <Route index element={<HomePage />} />
              <Route path='/productlistingpage' element={<ProductListingPage />} />
              <Route path='/productviewpage' element={<ProductViewPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

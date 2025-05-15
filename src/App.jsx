import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          <Route path="/products" element={
            <Layout>
              <ProductListingPage />
            </Layout>
          } />
          <Route path="/product/:id" element={
            <Layout>
              <ProductViewPage />
            </Layout>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App

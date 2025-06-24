import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'
import NotFound from './pages/NotFound'
import Pedidos from './pages/Pedidos'


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
          <Route path="/productview" element={
            <Layout>
              <ProductViewPage />
            </Layout>
          } />
          <Route path="/my-orders" element={
            <Layout>
              <Pedidos />
            </Layout>
          }/>
          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App

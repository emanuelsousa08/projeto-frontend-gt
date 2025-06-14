import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'
import PageLogin from './pages/PageLogin'
import PageRegister from './pages/PageRegister'
import FormRegister from './pages/FormRegister'
import NotFound from './pages/NotFound'


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
          <Route path="/login" element={
            <Layout>
              <PageLogin />
            </Layout>
          } />
          <Route path="/register" element={
            <Layout>
              <PageRegister />
            </Layout>
          }/>
          <Route path="/formregister" element={
            <Layout>
              <FormRegister />
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

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookPage from './pages/BookPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </div>
  )
}

export default App
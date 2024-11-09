import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/BookGrid'
import SuggestionBox from '../components/SuggestionBox'

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const searchBooks = async (query) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      setBooks(data.docs)
    } catch (err) {
      setError('An error occurred while fetching books. Please try again.')
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-700 py-8">
      <div className="container mx-auto px-10">
        <h1 className="text-5xl font-bold text-center mb-8 text-black">Book Finder</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <SearchBar onSearch={searchBooks} />
          <SuggestionBox onSearch={searchBooks} />
        </div>
        {loading && <p className="text-center mt-4 text-black">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-200">{error}</p>}
        <BookGrid books={books} />
      </div>
    </div>
  )
}
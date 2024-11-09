import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BookPage() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`)
        if (!response.ok) {
          throw new Error('Failed to fetch book details')
        }
        const data = await response.json()
        setBook(data)

        // Fetch author details
        if (data.authors) {
          const authorPromises = data.authors.map(author => 
            fetch(`https://openlibrary.org${author.author.key}.json`).then(res => res.json())
          )
          const authorDetails = await Promise.all(authorPromises)
          setBook(prevBook => ({
            ...prevBook,
            authorDetails
          }))
        }
      } catch (err) {
        setError('An error occurred while fetching book details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchBookDetails()
  }, [id])

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-700 py-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-black hover:underline mb-4 inline-block">&larr; Back to search</Link>
        {book && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
            {book.authorDetails && (
              <p className="text-xl mb-4">
                By {book.authorDetails.map(author => author.name).join(', ')}
              </p>
            )}
            {book.description && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p>{typeof book.description === 'object' ? book.description.value : book.description}</p>
              </div>
            )}
            {book.subjects && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Subjects</h2>
                <ul className="list-disc list-inside">
                  {book.subjects.slice(0, 10).map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'

export default function BookGrid({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Link to={`/book/${book.key.split('/').pop()}`} key={book.key} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </p>
            <p className="text-sm text-gray-500">
              {book.first_publish_year ? `Published: ${book.first_publish_year}` : 'Publication year unknown'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
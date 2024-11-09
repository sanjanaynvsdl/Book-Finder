import React from 'react'

const suggestions = [
  "Chetan",
  "To Kill a Mockingbird",
  "1984",
  "Pride and Prejudice",
  "The Great Gatsby",
  "Harry Potter"
]

export default function SuggestionBox({ onSearch }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Suggested searches:</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSearch(suggestion)}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
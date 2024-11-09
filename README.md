# Book Finder 📚

A modern web application built with React and Vite that allows users to search and explore books using the Open Library API. Perfect for book enthusiasts and students looking to discover new reads!

## Features

🔍 Search books by title, author, or keywords
-  View detailed book information including descriptions and authors
-  Beautiful gradient UI with responsive design
-  Fast and efficient search results
-  Helpful search suggestions

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Open Library API

## Project Structure

```
book-finder/
├── src/
│   ├── components/
│   │   ├── BookGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── SuggestionBox.jsx
│   ├── pages/
│   │   ├── BookPage.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## API Used

The application uses the Open Library Search API:
`https://openlibrary.org/search.json?q={searchTerm}`

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/sanjanaynvsdl/Book-Finder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd book-finder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.


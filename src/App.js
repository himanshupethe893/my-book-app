import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from your Express API
    axios.get('http://localhost:3005/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.book_id}>
            <strong>{book.title}</strong> by {book.author_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("./booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])


    return (
        <div className='my-10 mx-auto'>
            <h2 className="text-4xl font-bold text-center mb-10">Books</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    )
}

export default Books
import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { GoPeople } from 'react-icons/go'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Link } from 'react-router'

const ListedBook = ({ listedBook }) => {
    const { bookId, yearOfPublishing, publisher, tags, category, rating, review, image, author, bookName, totalPages } = listedBook

    return (
        <div className="card md:card-side  bg-base-100 border shadow-md p-6 my-5">
            <figure className='max-w-60 mx-auto max-h-64 py-8 px-12 bg-base-300 rounded-lg'><img src={image} alt={bookName} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
                <p className='text-xl'>By: {author}</p>
                <p className='text-lg md:flex items-center'>
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map((tag, idx) => <span className='bg-green-100 mx-2 font-bold text-green-500 py-1 px-6 rounded-full' key={idx}>{tag}</span>)
                    }
                    <span className='flex items-center gap-3'><FiMapPin />Year of Publishing: {yearOfPublishing}</span>
                </p>
                <p className='text-lg md:flex items-center'>
                    <span className='flex items-center gap-1 mr-3'><GoPeople />Publisher: {publisher}</span>
                    <span className='flex items-center gap-1'><IoDocumentTextOutline />Pages: {totalPages} </span>
                </p>
                <div className="divider my-0"></div>
                <div className="text-lg md:flex gap-2">
                    <span className='py-2 px-8 bg-blue-100 text-blue-500 rounded-full'>Category: {category}</span>
                    <span className='py-2 px-8 bg-orange-100 text-orange-500 rounded-full'>Rating: {rating}</span>
                    <Link to={`books/${bookId}`} className='py-2 px-8 bg-green-600 text-white rounded-full'>View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default ListedBook
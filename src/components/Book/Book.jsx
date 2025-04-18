import React from 'react'
import { Link } from 'react-router'

const Book = ({ book }) => {
    // console.log(book)
    const { publisher, tags, image, author, bookName, category, bookId } = book
    return (
        <Link to={`books/${bookId}`} className='hover:cursor-pointer'>
            <div className="card max-w-96 max-h-[478px] min-h-[478px]  shadow-xl hover:shadow-2xl transition-all duration-100 border">
                <figure className='bg-base-200 py-8 px-24 m-6 rounded-lg'><img src={image} className='rounded-md max-w-36 max-h-40' alt={bookName} /></figure>
                <div className="card-body">
                    <div className="flex gap-2 w-fit max-w-[340px]">
                        {
                            tags.map((tag, idx) => <p key={idx} className="text-green-600 font-semibold text-center px-4 py-2 rounded-2xl bg-green-100">
                                {tag}
                            </p>)
                        }
                    </div>

                    <h2 className="card-title text-xl font-bold">
                        {bookName}
                    </h2>
                    <p className='text-sm'>By: {publisher}</p>
                    <hr className="border-t-2 border-dashed border-gray-200 mt-2 mb-3" />
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-green-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-green-800" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-green-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-green-800" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-green-800" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book
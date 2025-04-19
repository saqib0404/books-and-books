import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToWishList } from '../../Utilities/AddToWish';

const BookDetail = () => {
    const { bookId } = useParams();
    const booksDetail = useLoaderData();

    const detail = booksDetail.find(book => book.bookId === Number(bookId))
    const { yearOfPublishing, publisher, tags, category, rating, review, image, author, bookName, totalPages } = detail

    return (
        <div className="hero min-h-[711px] my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='p-16 bg-base-200 rounded-xl md:mr-16'>
                    <img src={image}
                        className="md:min-w-[425px] md:min-h-[564px] md:max-w-[425px] md:max-h-[564px] rounded-lg " />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="pt-6 text-xl">By: {author}</p>
                    <div className="divider mb-[0px]"></div>
                    <span className='text-xl'>{category}</span>
                    <div className="divider mt-[0px]"></div>
                    <p><span className='font-bold'>Review</span>: {review}</p>
                    <span className="flex gap-2 items-center my-4"><span className='font-bold'>Tag</span>
                        {
                            tags.map((tag, idx) => <span key={idx} className="text-green-600 font-semibold text-center px-6 py-1 rounded-2xl bg-green-100">
                                #{tag}
                            </span>)
                        }
                    </span>
                    <div className="divider mb-[0px]"></div>

                    <div className='flex gap-10'>
                        <div className='text-gray-500'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <button className="btn mr-2">Read</button>
                        <button onClick={() => addToWishList(bookId)} className="btn bg-teal-500 text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail
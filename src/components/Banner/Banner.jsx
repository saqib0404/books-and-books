import React from 'react'
import BannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero  min-h-[554px] mt-10 mb-16 bg-base-300 rounded-lg md:px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-xl bg-green-600 mt-6 md:mt-14 text-white font-semibold rounded-lg">View the List</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
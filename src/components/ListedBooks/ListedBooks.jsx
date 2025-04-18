import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { getList } from '../../Utilities/AddToWish';
import { useLoaderData } from 'react-router';
import ListedBook from '../ListedBook/ListedBook';

const ListedBooks = () => {
    const storedList = getList();
    const books = useLoaderData();

    if (storedList === null) {
        return (
            <div>
                <h3 className="text-3xl font-semibold bg-base-300 text-center py-8 rounded-2xl mt-2 mb-8">Books</h3>
                <div>
                    <h3 className="text-4xl font-bold text-center mt-10 h-[500px]">No Books Added</h3>
                </div>
            </div>
        )
    } else {

        const storedListNum = storedList.map(list => Number(list));

        const listedBooks = books.filter(book => storedListNum.includes(book.bookId));

        return (
            <div>
                <h3 className="text-3xl font-semibold bg-base-300 text-center py-8 rounded-2xl mt-2 mb-8">Books</h3>
                <div className='text-center '>
                    <a className="btn mr-2 btn-lg mb-5 bg-green-600 text-white font-semibold rounded-lg">Sign in <IoIosArrowDown /></a>
                </div>
                <Tabs className="mb-10">
                    <TabList >
                        <Tab>Wishlist Books</Tab>
                        <Tab>Read Books</Tab>
                    </TabList>
                    <TabPanel className="my-5">
                        {
                            listedBooks.map(listedBook => <ListedBook listedBook={listedBook} key={listedBook.bookId} />)
                        }
                    </TabPanel>
                    <TabPanel className="my-5">
                        <p className='text-2xl'>
                            NO Books Found
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }

}

export default ListedBooks
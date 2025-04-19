import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetail />,
        loader: async () => {
          const res = await fetch('./booksData.json');
          return await res.json();
          // return fetch("./booksData.json");
        },
      },
      {
        path: "listed-books/books/:bookId",
        element: <BookDetail />,
        loader: async () => {
          const res = await fetch('./booksData.json');
          return await res.json();
          // return fetch("./booksData.json");
        },
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "listed-books",
        loader: async () => {
          const res = await fetch('./booksData.json');
          return await res.json();
          // return fetch("./booksData.json");
        },
        element: <ListedBooks />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </StrictMode>,
)

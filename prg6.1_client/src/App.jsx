import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import Layout from "./components/Layout.jsx";
import EditBook from "./pages/EditBook.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/books/create',
                element: <CreateBook/>,
            },
            {
                path: '/books/:id',
                element: <BookDetails/>,
            },
            {
                path: '/books/edit/:id',
                element: <EditBook/>,
            },
            {
                path: '/books/delete/:id',
                element: <DeleteBook/>
            }
        ]
    }
]);

function App() {

    return (
        <>

            <RouterProvider router={router}/>

        </>

    )
}


export default App


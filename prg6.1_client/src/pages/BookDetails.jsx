import { Link, useParams } from "react-router"
import { useState, useEffect } from "react";

function BookDetail() {

    const {id} = useParams();
    console.log('id', id)

    const [books, setBooks] = useState([]);


    useEffect(() => {

        async function fetchBook(params) {
            try {
                const response = await fetch(`http://145.24.222.201:8000/books/` + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);

                setBooks(data)

            } catch(error) {
                console.error('Something went wrong:', error);
            }

        }

        fetchBook()
    }, [id])

    return (
        <>
            <div>

                <h3>
                    Title: {books.title}
                </h3>
                <h4>
                    By: {books.author}
                </h4>
                <h5>
                    Genre: {books.genre}
                </h5>
                <h5>
                    Amount of pages: {books.pages}
                </h5>
                <p>
                    {books.description}
                </p>

                <Link to = {`/books/delete/${books.id}`}>
                    <button> Delete book </button>
                </Link>
                <Link to = {`/books/edit/${books.id}`}>
                    <button> Edit book </button>
                </Link>

            </div>
        </>

    )
}

export default BookDetail
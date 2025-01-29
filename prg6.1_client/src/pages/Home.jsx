import { useEffect, useState } from 'react'
import BookComponent from "../components/BookComponent.jsx";

function Home() {

    const [books, setBooks] = useState([]);


    useEffect(() => {

        async function fetchBook(params) {
            try {
                const response = await fetch('http://145.24.222.201:8000/books', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);

                setBooks(data.items)

            } catch(error) {
                console.error('Something went wrong:', error);
            }

        }

        fetchBook()
    }, [])

    return(

        <div>

            { books.map((book) => <BookComponent item = {book} key = {book.id}>  </BookComponent>)}

        </div>
    )

}

export default Home;
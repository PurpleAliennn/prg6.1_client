import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function DeleteBook() {

    const {id} = useParams();
    console.log('id', id);
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchBook(params) {
            try {
                const response = await fetch(`http://145.24.222.201:8000/books/` + id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                alert('Book deleted!');
                navigate('/');

            } catch(error) {
                console.error('Something went wrong:', error);
            }

        }

        fetchBook()
    }, [id])

    return (
        <>
            <div>

                <h2> Do you truly wish to delete this book </h2>
                <button
                    onClick={DeleteBook}
                >
                    Delete Book
                </button>

            </div>

        </>

    )
}

export default DeleteBook
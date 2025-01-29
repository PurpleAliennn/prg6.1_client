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

                alert('Book has been deleted!');
                navigate('/');

            } catch(error) {
                console.error('Something went wrong:', error);
            }

        }

        fetchBook()
    }, [id])

    return (
        <>
            <div className= "deleteField">
                <div className= "deleteCard">
                    <h2> your book has been removed </h2>
                </div>
            </div>

        </>

    )
}

export default DeleteBook
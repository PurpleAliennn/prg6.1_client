import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

function EditBook() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [books, setBooks] = useState({
        title: '',
        author: '',
        description: '',
        genre: '',
        pages: '',
    });

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(`http://145.24.222.201:8000/books/` + id, {
                method: 'GET',
                    headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            setBooks({
                title: data.title || '',
                author: data.author || '',
                description: data.description || '',
                genre: data.genre || '',
                pages: data.pages || ''
            });
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    }

    fetchBook();
}, [id]);
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooks((prevBook) => ({
        ...prevBook,
        [name]: value,
    }));
};

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`http://145.24.222.201:8000/books/${id}`, {
        method: 'PUT',
            headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(books),
    })

    if (response.ok) {
        console.log("hello")
        const updatedBook = await response.json();
        navigate('/');

    } else {
        throw new Error(`status ${response.status}`)
        // console.error('Error updating book');
    }
} catch (error) {
    console.error('Error updating book:', error);
}
};

if (!books.title && !books.description && !books.author && !books.genre && !books.pages) {
    return <div>Loading...</div>;
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title"> Title: </label>
            <input
                type="text"
                id="title"
                name="title"
                value={books.title}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="author"> Author: </label>
            <input
                type="text"
                id="author"
                name="author"
                value={books.author}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="description"> Description: </label>
            <input
                type="text"
                id="description"
                name="description"
                value={books.description}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="genre"> Genre: </label>
            <input
                type="text"
                id="genre"
                name="genre"
                value={books.genre}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="pages"> Pages: </label>
            <input
                type="number"
                id="pages"
                name="pages"
                value={books.pages}
                onChange={handleInputChange}
            />
        </div>

        <button type="submit"> Save Changes </button>
    </form>
);
}

export default EditBook;
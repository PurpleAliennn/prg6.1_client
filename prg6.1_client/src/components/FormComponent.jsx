import React, {useState} from 'react';
import { useNavigate } from 'react-router';

function FormComponent({}) {

    const navigate= useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        genre: '',
        pages: ''
    });

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };

    async function addBook(bookData) {

        try {

            const response = await fetch('http://145.24.222.201:8000/books', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(bookData)

            });

            const data = await response.json();
            navigate('/');

            console.log(data);

        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        addBook(formData);

    };

    return (

        <div className= "formComponent">
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="title"> Title: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="author"> Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="description"> Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="genre"> Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="pages"> Amount of pages:</label>
                    <input
                        type="number"
                        id="pages"
                        name="pages"
                        value={formData.pages}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit"> Submit</button>

            </form>
        </div>
    );
}

export default FormComponent;
import {Link} from "react-router";

function BookComponent({item}) {
    return(

        <div className = "bookCard">
            <div className="cardContent">

                <h3>
                    Title: {item.title}
                </h3>
                <h4>
                    By: {item.author}
                </h4>
                <h5>
                    Genre: {item.genre}
                </h5>
                <h6>
                    Amount of pages: {item.pages}
                </h6>
                <p>
                    {item.description}
                </p>

                <Link to = {`books/${item.id}`}>
                    <button> Details </button>
                </Link>

            </div>
        </div>

    )
}

export default BookComponent
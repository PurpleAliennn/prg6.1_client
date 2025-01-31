import {Link} from "react-router";

function BookComponent({item}) {
    return(

        <div className= "cardView">
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

                    <Link to = {`books/${item.id}`}>
                        <button> Details </button>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default BookComponent
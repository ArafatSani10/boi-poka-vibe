import { Link } from "react-router-dom";
import Books from "../../Must/Banner/Books/Books";


const Book = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <Link to={`/books/${bookId}`}>

            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-gray-500 py-8 rounded-2xl border-2
        ">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-5 justify-center">
                        {
                            tags.map((tag,index) => <button key={index} className="btn btn-xs bg-green-200">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>

                    <div className="border-t-2 border-dashed my-5"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-5 px-6">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;
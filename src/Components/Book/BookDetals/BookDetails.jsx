import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image, bookName, author, tags, review, totalPages, publisher, yearOfPublishing, rating } = book;
    //    console.log(book,bookId,id)
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl w-60" />
                <div>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p className="py-6">
                        By : {author}
                    </p>
                    <div className="divider"></div>
                    <p>{tags}</p>
                    <div className="divider"></div>
                    <div>
                        <p className="font-bold text-xl"> review :{review}</p>
                    </div>

                    <div className="divider"></div>

                    <div>
                        <h1>Number of publishing : {yearOfPublishing}</h1>
                        <p> publisher : {publisher}</p>
                        <p>rating : {rating}</p>
                    </div>
                    <button className="btn mr-5 btn-accent btn-outline">Mark as Read</button>
                    <button className="btn btn-accent">WhichList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
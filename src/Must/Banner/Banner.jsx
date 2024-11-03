
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/pwSJ62K/books.webp"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Books To Freshen Up <br />
            Your Bookshelf</h1>
            
            <button className="btn btn-primary bg-yellow-200 my-10">View the list</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
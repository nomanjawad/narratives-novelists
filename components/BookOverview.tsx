import { FaRegStar } from "react-icons/fa6";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  avaiable_copies,
  discription,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-col flex-1 gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Catagory:{""}{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1 justify-center">
            <FaRegStar />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies ">
          <p>
            Total Books: <span>{total_copies}</span>
          </p>
          <p>
            Avaiable Books: <span>{avaiable_copies}</span>
          </p>
        </div>
        <p className="book-description">{discription}</p>
      </div>
    </section>
  );
};

export default BookOverview;

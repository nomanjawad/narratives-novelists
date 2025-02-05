import { FaBook, FaRegStar } from "react-icons/fa6";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  avaiable_copies,
  description,
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
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
          <FaBook />{" "}
          <p
            className="font-bebas-neue text-xl text-dark-100 uppercase"
            style={{ fontFamily: " var(--bebas-neue)" }}
          >
            Borrow
          </p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center items-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverUrl={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover variant="wide" coverColor={color} coverUrl={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;

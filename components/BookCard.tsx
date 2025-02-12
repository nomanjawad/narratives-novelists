import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import { FaCalendarWeek } from "react-icons/fa6";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLonedBook = false,
}: Book) => {
  return (
    <li className={cn(isLonedBook && "ws-52 full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLonedBook && "w-full flex flex-col items-center" )}
      >
        <BookCover coverColor={color} coverUrl={cover} />
        <div className={cn("mt-4", !isLonedBook && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

        {isLonedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <FaCalendarWeek color="white" fontSize={16}/>
              <p className="text-light-100">11 Dayes left to return</p>
            </div>
            <button className="book-btn">Download Recipt</button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default BookCard;

import Link from "next/link";
import BookCover from "./BookCover";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLonedBook = false,
}: Book) => {
  return (
    <li>
      <Link href={`/books/${id}`}>
        <BookCover coverColor={color} coverUrl={cover} />
      </Link>
    </li>
  );
};

export default BookCard;

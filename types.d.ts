interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  avaiable_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLonedBook?: boolean;
}

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

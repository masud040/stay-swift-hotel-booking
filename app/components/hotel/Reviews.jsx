import { getReviewsForAHotel } from "@/db/queries";
import Link from "next/link";

const Reviews = async ({ hotelId }) => {
  const reviews = await getReviewsForAHotel(hotelId);

  return (
    <span className="text-sm underline">
      {reviews.length > 0 ? (
        <Link href={`/reviews/${hotelId}`}>{reviews.length} Reviews</Link>
      ) : (
        "Be your first review"
      )}
    </span>
  );
};

export default Reviews;

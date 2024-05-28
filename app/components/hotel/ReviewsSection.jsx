import { getReviewsForAHotel } from "@/db/queries";
import Link from "next/link";

const ReviewsSection = async ({ hotelId }) => {
  const reviews = await getReviewsForAHotel(hotelId);

  return reviews?.length === 0 ? (
    <Link href="#" className="underline">
      Be the first one to review
    </Link>
  ) : (
    <Link href={`/hotel/${hotelId}/reviews`} className="underline">
      {reviews.length} Reviews
    </Link>
  );
};

export default ReviewsSection;

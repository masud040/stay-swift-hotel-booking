import Link from "next/link";
import RatingSection from "./RatingSection";
import ReviewsSection from "./ReviewsSection";

const HotelSummaryInfo = async ({
  fromListPage,
  hotelInfo,
  checkin,
  checkout,
}) => {
  const {
    id,
    name,
    city,
    highRate,
    lowRate,
    propertyCategory,
    thumbNailUrl,
    isBooked,
  } = hotelInfo || {};

  let params = "";
  if (checkin && checkout) {
    params = `?checkin=${checkin}&checkout=${checkout}`;
  }

  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {name}
        </h2>
        <p>📍 {city}</p>
        <div className="flex items-center gap-2 my-4">
          <RatingSection hotelId={id} />

          <ReviewsSection hotelId={id} />
          {isBooked && <span>Sold Out</span>}
        </div>
        <div>
          <span className="px-1 bg-yellow-300 rounded-md">
            {propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center gap-2">
        <h2 className="text-2xl font-bold text-right">
          ${(highRate + lowRate) / 2}/night
        </h2>
        <p className="text-right ">Per Night for 4 Rooms</p>
        {fromListPage ? (
          <Link className="btn-primary" href={`hotels/${id}${params}`}>
            Details
          </Link>
        ) : (
          <Link
            href={isBooked ? "#" : `${id}/payment${params}`}
            className={isBooked ? "btn-disabled" : "btn-primary"}
          >
            Book
          </Link>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;

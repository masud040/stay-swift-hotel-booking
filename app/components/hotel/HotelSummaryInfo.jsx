import { getRatingsForAHotel } from "@/db/queries";
import Reviews from "./Reviews";

const HotelSummaryInfo = async ({ fromListPage, hotelInfo }) => {
  const { id, name, city, highRate, lowRate, propertyCategory, thumbNailUrl } =
    hotelInfo || {};

  const ratings = await getRatingsForAHotel(id);

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
          <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
            5.4
          </div>
          <span className="font-medium">Very Good</span>
          <Reviews hotelId={id} />
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
          <button className="btn-primary ">Details</button>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;

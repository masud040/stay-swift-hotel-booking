import { BookingModel } from "@/models/booking-model";
import { RatingModel } from "@/models/rating-model";
import { ReviewModel } from "@/models/review-model";
import { isDateInbetween } from "@/utils/checkBooking";
import { replaceMongoId } from "@/utils/replaceMongoId";
import { replaceMongoIdArray } from "@/utils/replaceMongoIdArray";

const { HotelModel } = require("@/models/hotel-model");
const { default: connectMongo } = require("../connectMongo");

async function getAllHotels(destination, checkin, checkout) {
  await connectMongo();
  const regex = new RegExp(destination, "i");
  const hotelByDestinaiton = await HotelModel.find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  let allHotels = hotelByDestinaiton;
  if (checkin && checkout) {
    const data = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);
        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
    console.log(data);
  }

  return replaceMongoIdArray(allHotels);
}
async function findBooking(hotelId, checkin, checkout) {
  await connectMongo();
  const matches = await BookingModel.find({
    hotelId: hotelId.toString(),
  }).lean();
  const found = matches.find((match) => {
    return (
      isDateInbetween(checkin, match.checkin, match.checkout) ||
      isDateInbetween(checkout, match.checkin, match.checkout)
    );
  });
  return found;
}

async function getReviewsForAHotel(hotelId) {
  await connectMongo();
  const reviews = await ReviewModel.find({
    hotelId: hotelId,
  });

  return replaceMongoIdArray(reviews);
}
async function getRatingsForAHotel(hotelId) {
  const ratings = await RatingModel.find({
    hotelId: hotelId,
  }).lean();
  return replaceMongoIdArray(ratings);
}

async function getHotelById(hotelId) {
  await connectMongo();
  const hotel = await HotelModel.findOne({
    _id: hotelId,
  }).lean();
  return replaceMongoId(hotel);
}

export { getAllHotels, getHotelById, getRatingsForAHotel, getReviewsForAHotel };

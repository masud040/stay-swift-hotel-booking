import { RatingModel } from "@/models/rating-model";
import { ReviewModel } from "@/models/review-model";
import { replaceMongoId } from "@/utils/replaceMongoId";
import { replaceMongoIdArray } from "@/utils/replaceMongoIdArray";

const { HotelModel } = require("@/models/hotel-model");
const { default: connectMongo } = require("../connectMongo");

async function getAllHotels() {
  await connectMongo();
  const hotels = await HotelModel.find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  return replaceMongoIdArray(hotels);
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

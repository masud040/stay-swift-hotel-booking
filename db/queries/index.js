import { RatingModel } from "@/models/rating-model";
import { ReviewModel } from "@/models/review-model";
import { replaceMongoId } from "@/utils/replaceMongoId";

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

  return replaceMongoId(hotels);
}

async function getReviewsForAHotel(hotelId) {
  await connectMongo();
  const reviews = await ReviewModel.find({
    hotelId: hotelId,
  });

  return replaceMongoId(reviews);
}
async function getRatingsForAHotel(hotelId) {
  const ratings = await RatingModel.find({
    hotelId: hotelId,
  }).lean();
  return replaceMongoId(ratings);
}

export { getAllHotels, getRatingsForAHotel, getReviewsForAHotel };

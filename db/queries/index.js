import { replaceMongoId } from "@/utils/replaceMongoId";

const { HotelModel } = require("@/models/hotel-model");
const { default: connectMongo } = require("../connectMongo");

async function getAllHotels() {
  await connectMongo();
  const hotels = await HotelModel.find().lean();

  return replaceMongoId(hotels);
}

export { getAllHotels };

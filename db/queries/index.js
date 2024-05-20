const { HotelModel } = require("@/models/hotel-model");
const { default: connectMongo } = require("../connectMongo");

async function getAllHotels() {
  await connectMongo();
  const hotels = HotelModel.find().lean();
  return hotels;
}

export { getAllHotels };

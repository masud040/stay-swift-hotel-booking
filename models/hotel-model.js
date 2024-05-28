const { Schema, mongoose } = require("mongoose");

const hotelSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  airportCode: {
    required: true,
    type: String,
  },
  city: {
    required: false,
    type: String,
  },
  countryCode: {
    required: false,
    type: String,
  },
  highRate: {
    required: false,
    type: Number,
  },
  location: {
    required: false,
    type: Object,
  },
  lowRate: {
    required: false,
    type: Number,
  },
  postalCode: {
    required: false,
    type: Number,
  },
  propertyCategory: {
    required: false,
    type: Number,
  },
  shortDescription: {
    required: true,
    type: String,
  },
  stateProvinceCode: {
    required: false,
    type: String,
  },
  thumbNailUrl: {
    required: true,
    type: String,
  },
  gallery: {
    required: true,
    type: Array,
  },
  overview: {
    required: true,
    type: String,
  },
  amenities: {
    required: false,
    type: Array,
  },
});

export const HotelModel =
  mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema);

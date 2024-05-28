const { Schema, default: mongoose } = require("mongoose");

const ratingSchema = new Schema({
  hotelId: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const RatingModel =
  mongoose.models.ratings ?? mongoose.model("ratings", ratingSchema);

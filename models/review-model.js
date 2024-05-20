const { Schema, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({
  hotelId: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
  review: {
    required: true,
    type: String,
  },
});

export const ReviewModel =
  mongoose.models.reviews ?? mongoose.models("reviews", reviewSchema);

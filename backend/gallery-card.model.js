const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const galleryCardSchema = new Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: String,
    dateCompleted: Date
  },
  {
    timestamps: true
  }
);

const GalleryCard = mongoose.model("GalleryCard", galleryCardSchema);

module.exports = GalleryCard;

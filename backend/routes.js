const router = require("express").Router();
let GalleryCard = require("./gallery-card.model");

router.route("/gallery-items/").get((req, res) => {
  GalleryCard.find()
    .then(galleryItems => res.json(galleryItems))
    .catch(err => res.status(400).json("Error: " + err));
});

// router.route("/").get((req, res) => {
//   GalleryCard.find()
//     .then(galleryItems => res.json(galleryItems))
//     .catch(err => res.status(400).json("Error: " + err));
// });

// for future use, update UI that an authenticated user could add new cards
router.route("/gallery-items/add").post((req, res) => {
  const imgUrl = req.body.imgUrl;
  const title = req.body.title;
  const description = req.body.description;

  const newGalleryCard = new GalleryCard({ imgUrl, title, description });
  newGalleryCard
    .save()
    .then(() => res.json("A new gallery card added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

const express = require("express");
const router = express.Router();

/*main routes includes

GET /allwords               GET all words as an array ["wordone", "wordtwo"]


main routes includes*/

// Load Item model
const Item = require("../../models/Item");

// @route   GET /allwords
// @desc    Get all words as an array
// @access  Public
router.get("/", (req, res) => {
  const errors = {};
  const wordArray = [];

  Item.find()
    .select(["-definition", "-_id"])
    .then(item => {
      if (!item) {
        errors.noitem = "There are no words in the Database";
        return res.status(404).json(errors);
      }
      item.forEach(myFunction);
      function myFunction(word, index) {
        wordArray.push(word.word);
      }
      res.json(wordArray);
    })
    .catch(err =>
      res.status(404).json({ item: "There are no words in the Database" })
    );
});

// @route   GET /*
// @desc    Return 404 for all unidentified routes
// @access  Public
const fourNaughtFour = {
  message: "Not Found",
  all_endpoints_url: "https://wordhound.niweera.gq"
};
router.get("*", function(req, res) {
  res.status(404).json(fourNaughtFour);
});

module.exports = router;

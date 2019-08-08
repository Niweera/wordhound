const express = require("express");
const router = express.Router();

/*main routes includes

GET /words               GET all words
POST /words/add          Add a new word

main routes includes*/

// Load Input Validation
const validateRegisterInput = require("../../validation/register");

// Load Item model
const Item = require("../../models/Item");

// @route   POST /words/add
// @desc    Insert new word
// @access  Public for now, will be Private later
router.post("/add", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newItem = {};

  if (req.body.word) newItem.word = req.body.word;
  if (req.body.definition) newItem.definition = req.body.definition;

  Item.findOne({ word: req.body.word }).then(item => {
    if (item) {
      //throw an error
      errors.itemexist = "The word exists!";
      res.status(404).json(errors);
    } else {
      //create new item
      new Item(newItem)
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));
    }
  });
});

// @route   GET /words/word
// @desc    Get items by ID for viewing
// @access  Public

router.get("/:word", (req, res) => {
  Item.findOne({ word: req.params.word })
    .then(item => {
      if (!item) {
        res.status(404).json({ error: "Cannot define the given word" });
      } else {
        res.json(item);
      }
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET /words
// @desc    Get all words
// @access  Public
router.get("/", (req, res) => {
  const errors = {};

  Item.find()
    .then(item => {
      if (!item) {
        errors.noitem = "There are no words in the Database";
        return res.status(404).json(errors);
      }

      res.json(item);
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

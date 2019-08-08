const express = require("express");
const router = express.Router();

// Load User model
const Endpoint = require("../../models/Endpoint");

let endPoint = {};

// @route   GET /
// @desc    Get all endpoints
// @access  Public
router.get("/", (req, res) => {
  const errors = {};

  Endpoint.find()
    .then(endpoint => {
      if (!endpoint) {
        errors.noendpoint = "There are no Endpoints in the Database";
        return res.status(404).json(errors);
      }
      endpoint.forEach(myFunction);
      function myFunction(item, index) {
        endPoint[item.name] = item.url;
      }
      res.json(endPoint);
    })
    .catch(err =>
      res
        .status(404)
        .json({ endpoint: "There are no Endpoints in the Database" })
    );
});

// router.get("/", function(req, res) {
//   res.status(200).json({ it: "is working" });
// });

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

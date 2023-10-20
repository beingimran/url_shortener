const express = require("express");
const {
  handlegenerateNewShortUrl,
  handleredirectUrl,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handlegenerateNewShortUrl);
router.get("/:shortId", handleredirectUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;

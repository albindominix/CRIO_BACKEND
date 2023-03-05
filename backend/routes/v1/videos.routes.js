const express = require("express");
const videosController = require("../../controllers/videos.controllers");

const router = express.Router();

router.post("/", videosController.addVideos);
router.get("/" , videosController.getVideos);
router.get("/:videoId", videosController.getVideoById);
router.patch("/:videoId/votes", videosController.patchVotes);
router.patch("/:videoId/views", videosController.patchViews);

module.exports = router;
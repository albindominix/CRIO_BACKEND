const videosServices = require("../services/videos.services");
const helper = require("../utils/helper");

const addVideos = async (req, res) => {
  const result = await videosServices.addVideos(req.body);
  res.send(result);
};

const getVideos = async (req, res) => {
  let videos = await videosServices.getVideos();
  // console.log(req.params.videoId);

  if (!req.query.sortBy) {
    videos = await videosServices.sortByReleaseDate(videos);
  } else if (req.query.sortBy === "viewCount") {
    videos = await videosServices.sortByViewCount(videos);
  } else if (req.query.sortBy === "releaseDate") {
    videos = await videosServices.sortByReleaseDate(videos);
  } else {
    //Error
  }

  if (req.query.title) {
    videos = await videosServices.filterByTitle(videos, req.query.title);
  }

  if (req.query.genres) {
    const listOfGenre = req.query.genres.split(",");
    const masterListGenre = [
      "Education",
      "Sports",
      "Movies",
      "Comedy",
      "Lifestyle",
      "All",
    ];

    if (helper(masterListGenre, listOfGenre)) {
      videos = await videosServices.filterByGenre(videos, listOfGenre);
    } else {
      //Error
    }
  }

  if (req.query.contentRating) {
    videos = await videosServices.filterByContentRating(
      videos,
      req.query.contentRating
    );
  }

  const result = {
    videos: videos,
  };

  res.send(result);
};

const getVideoById = async (req, res) => {
  const result = await videosServices.getVideoById(req.params.videoId);
  res.send(result);
};

const patchVotes = async (req, res) => {
  if(req.body.vote === "downVote") {
    const result = await videosServices.patchDownVote(req.body.change, req.params.videoId);
    console.log(result);
    res.send(result);
  } else if(req.body.vote === "upVote"){
    const result = await videosServices.patchUpVote(req.body.change, req.params.videoId);
    res.send(result);
  } else {
    //Error
  }
};

const patchViews = async (req, res) => {
  const result = await videosServices.patchViews(req.params.videoId);
  res.send(result);
}

module.exports = { getVideos, addVideos, getVideoById, patchVotes, patchViews };

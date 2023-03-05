const { Videos } = require("../models");

const addVideos = async (data) => {
  try {
    const result = new Videos(data);
    await result.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getVideos = async () => {
  const result = await Videos.find();
  return result;
};

const sortByViewCount = async (data) => {
  const result = data.sort((first, second) => {
    if (first.releaseDate >= second.releaseDate) return 0;
    else return 1;
  });
  return result;
};

const sortByReleaseDate = async (data) => {
  const result = data.sort((first, second) => {
    if (first.releaseDate - second.releaseDate < 0) return 1;
    else if (second.releaseDate - first.releaseDate < 0) return -1;
    else return 0;
  });
  return result;
};

const filterByTitle = async (data, title) => {
  const result = data.filter((elem) => {
    const str1 = elem.title.toUpperCase();
    const str2 = title.toUpperCase();
    console.log(str2);
    console.log(str1.includes(str2));
    if (str1.includes(str2)) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

const filterByGenre = async (data, genre) => {
  const result = data.filter((elem) => {
    for (let i = 0; i < genre.length; i++) {
      if (genre[i] === elem.genre) {
        return true;
      }
    }
  });
  return result;
};

const filterByContentRating = async (data, contentRating) => {
  const result = data.filter((elem) => {
    if (elem.contentRating === contentRating) {
      return true;
    }
    return false;
  });

  return result;
};

const getVideoById = async (id) => {
  const result = await Videos.findById(id);
  return result;
};

const patchUpVote = async (action, id) => {
  const result = await Videos.findById(id);
  if(action === "increase") {
    result.votes.upVotes++;
  } else if (action === "decrease") {
    result.votes.upVotes--;
  } else {
    //Error
  }
  await result.save();
  return result;
}

const patchDownVote = async (action, id) => {
  const result = await Videos.findById(id);
  if(action === "increase") {
    result.votes.downVotes++;
  } else if (action === "decrease") {
    result.votes.downVotes--;
  } else {
    //Error
  }
  await result.save();
  return result;
}

const patchViews = async (id) => {
  const result = await Videos.findById(id);
  result.viewCount++;
  await result.save();
  return result;
}

module.exports = {
  getVideos,
  addVideos,
  sortByViewCount,
  sortByReleaseDate,
  filterByTitle,
  filterByGenre,
  filterByContentRating,
  getVideoById,
  patchDownVote,
  patchUpVote,
  patchViews
};

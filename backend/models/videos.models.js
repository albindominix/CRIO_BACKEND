const mongoose = require("mongoose");

const videosSchema = mongoose.Schema({
  videoLink: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(youtube\.com\/embed\/|https:\/\/www\.youtube\.com\/embed\/)/gm.test(
          value
        );
      },
      message: (props) => `${props.value} is not a valid Video Link!`,
    },
  },
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(Education|Sports|Movies|Comedy|Lifestyle|All)/gm.test(value);
      },
      message: (props) => `${props.value} is not a valid Genre!`,
    },
  },
  contentRating: {
    type: String,
    required: true,
    validate: {
        validator: function (value) {
          return /^(Anyone|7+|12+|16+|18+)/gm.test(value);
        },
        message: (props) => `${props.value} is not a valid Content Rating!`,
      },
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  previewImage: {
    type: String,
    required: true,
  },
  votes: {
    type: {
      upVotes: {
        type: Number,
        default: 0,
      },
      downVotes: {
        type: Number,
        default: 0,
      },
    },
    default: {
      upVotes: 0,
      downVotes: 0,
    }
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

const Videos = mongoose.model("xflix", videosSchema);

module.exports = { Videos };

const mongoose = require("mongoose")
const movieSchema = mongoose.Schema(
    {
        movieName:String,
        movieDirector:String,
        movieActor:String,
        releaseYear:String
    }
)

module.exports = mongoose.model("movie", movieSchema)
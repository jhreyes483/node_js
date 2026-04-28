const { Schema, model } = require("mongoose");

const ArticlesSchema = Schema({
    tittle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
    img: {
        type: String,
        default: "default.png"
    }
});

module.exports = model("Article", ArticlesSchema, "articles")
// articles
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    description: String,
    categoryId: String,
    deleted: Boolean,
  },
  { timestamps: true }
);

const Article = mongoose.model("Articles", articleSchema, "articles");

export default Article;

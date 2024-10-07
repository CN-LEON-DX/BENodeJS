import { get } from "http";
import Article from "./models/articles.model";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello men";
    },

    getlistArticle: async () => {
      const articles = await Article.find({
        deleted: false,
      });
      return articles;
    },

    getArticle: async (_: any, args) => {
      const {id} = args;
      const article = await Article.findOne({
        _id: id,
        deleted: false,
      });
      return article;
    }
  },
};

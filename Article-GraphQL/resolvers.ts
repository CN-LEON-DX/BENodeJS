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
      const { id } = args;
      const article = await Article.findOne({
        _id: id,
        deleted: false,
      });
      return article;
    },
  },

  Mutation: {
    createArticle: async (_: any, args) => {
      const { article } = args;
      const newArticle = new Article(article);
      await newArticle.save();

      return newArticle;
    },
    deleteArticle: async (_: any, args) => {
      const { id } = args;
      const article = await Article.updateOne(
        { _id: id },
        { deleted: true, deletedAt: new Date() }
      );
      return "Delete success";
    },
    updateArticle: async (_: any, args) => {
        const { id, article} = args;
        await Article.updateOne(
            {_id: id},
            article
        );

        return "Update success";
    }
  },
};

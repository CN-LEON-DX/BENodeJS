import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
  }

  type Query {
    hello: String
    getlistArticle: [Article]
    getArticle(id: ID): Article # get article by id
  }

  # if we want to create, update, delete we need to create input
  input ArticleInput {
    title: String
    avatar: String
    description: String
  }
  # update, delete, create
  # after create, update, delete we need to return the object or null
  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): String
    deleteArticle(id: ID): String
  }
`;

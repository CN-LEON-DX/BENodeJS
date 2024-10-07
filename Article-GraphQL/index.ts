import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
// import Article from "./models/articles.model";

// setup env
dotenv.config();

// end env
const startServer = async () => {

    const app: Express = express();
    const port: string | number = process.env.PORT || 3000;

    // connect to database
    database.connect();

    app.use(express.static(`${__dirname}/public`));

    // pug usage
    app.set("views", "./views");
    app.set("view engine", "pug");
    // end pug


  // to create graphql we need to have two main things
  
  
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql",
  });


  app.listen(port, () => {
    console.log("App listening at port " + port);
  });
};

startServer();

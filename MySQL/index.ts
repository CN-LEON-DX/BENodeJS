import express, { Express, Request, Response } from "express";

// import Article from "./models/articles.model";
const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

// pug usage
app.set("views", "./views");
app.set("view engine", "pug");
// end pug

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("App listening at port " + port);
  });
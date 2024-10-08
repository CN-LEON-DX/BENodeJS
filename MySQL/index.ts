import express, { Express, Request, Response } from "express";
import sequelize from "./config/database";
// import Article from "./models/articles.model";
import dotenv from "dotenv";
dotenv.config();
sequelize;

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

// pug usage
app.set("views", "./views");
app.set("view engine", "pug");
// end pug

app.get("/", (req: Request, res: Response) => {
    res.send("List tour");
});

app.get("/tour", (req: Request, res: Response) => {
    res.send("List tour");
});



app.listen(port, () => {
    console.log("App listening at port " + port);
});
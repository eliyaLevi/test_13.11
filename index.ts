import express, { Express } from "express";
import "dotenv/config";
import router from "./router/router";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import loadInitialData from "./helpers/sid";
import cors from "cors"

mongoose.connect(process.env.MONGO_DB_CONECTION || "")
.then(() =>console.log("Connected to mongo"))
.catch(() => console.error("DisConect to mongo"))

const app: Express = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true  
})); 

loadInitialData()
app.use(express.json());
app.use(router);
app.use(cookieParser())


app.listen(process.env.PORT || 3000, () => {
  console.log(`listen to port ${process.env.PORT || 3000}`);
});

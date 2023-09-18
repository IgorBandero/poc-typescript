import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "@/routes/routes";
import errorHandler from "@/middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);
dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running server on port ${port}`));



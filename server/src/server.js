import 'dotenv/config';

import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import chapterRoutes from "./routes/chapterRoutes.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/chapters", chapterRoutes);

connectDB();

app.get('/chapters2',(req, res) => {
    res.json({message: "Hello World"});
})

const PORT = process.env.PORT;

const server = app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${process.env.PORT}`);
})
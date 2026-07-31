require("dotenv").config();

const express = require('express');
const connectDB = require("./config/db.js");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const chapterRoutes = require("./routes/chapterRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/chapters", chapterRoutes);

connectDB();

app.get('/chapters2',(req, res) => {
    res.json({message: "Hello World"});
})

const PORT = process.env.PORT;

const server = app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${process.env.PORT}`);
})
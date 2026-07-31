const express = require("express");
const router = express.Router();

const Chapter = require("../models/Chapter");

router.get("/chapters", async (req, res) => {
    const chapters = await Chapter.find();
    res.json(chapters);
})

router.get("/chapters1", async (req, res) => {
    res.json({message: "Hello World"});
})

router.post("/chapters", async (req, res) => {
    try {
        const user = await Chapter.create(req.body);

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
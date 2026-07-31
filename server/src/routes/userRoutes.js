const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
import express from 'express';
import User from '../models/User.js'

const router = express.Router();

router.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

const userRoutes = router;
export default userRoutes;
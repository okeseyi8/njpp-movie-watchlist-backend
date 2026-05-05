import express from "express";

const router =  express.Router();

router.get("/movies", (req, res) => {
     res.json({
        message: "Movies route",
     })
})

export default router;
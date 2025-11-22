import express from "express";
import Post from "../models/postModel.js";


const router = express.Router();




router.get("/about", (req, res) => {
    res.send("Hello World!");
});


router.post("/", async(req, res) => {

    const {title, body} = req.body;

    await Post.create({title, body}); 
    
    res.status(201).json({message: "Post created successfully"});
});

export default router;

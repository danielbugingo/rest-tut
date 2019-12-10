const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//This gets a post from the database
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//This submits a post to the database.
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//Get a specific post
router.get('./:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({ message: err })
    }
})

//Deleting a post from the database
router.delete('./:postId', async (req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId });
        res.json(removePost);
    }catch (err){}
});
module.exports = router;
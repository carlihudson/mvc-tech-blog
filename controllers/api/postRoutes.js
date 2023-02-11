const router = require('express').Router();

const { Comment, Post, User } = require('../../models');

// get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'timestamp', 'post_content'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_content']
                }
            ]
        });
        console.log(postData)
        if(!postData) {
            res.status(404).json({ message: "Couldn't get posts"});
            return;
        }
        res.status(200).json(postData); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// get post by id
router.get('/:id', async (req, res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'timestamp', 'post_content'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_content']
                }
            ]
        });
        console.log(singlePost)
        if(!singlePost) {
            res.status(404).json({ message: "No post with this ID!"});
            return;
        }
        res.status(200).json(singlePost); 
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
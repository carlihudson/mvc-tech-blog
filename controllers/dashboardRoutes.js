const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// route to single post
router.get('/edit/:id', async (req, res) => {
    try {
        const singlePostData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'timestamp', 'post_content'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, 
            ]
        });
     
            const singlePost = singlePostData.get({ plain: true });
          
            res.render('singlepost', { post: singlePost, logged_in: req.session.logged_in });
      
    } catch (err) {
        res.status(500).json(err);
    }
});

  module.exports = router;
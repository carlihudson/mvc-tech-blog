const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

// route to homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: ['id', 'title', 'timestamp', 'post_content'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_content'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        });
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts });
      
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
});

// route to signin page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// route to dashboard
router.get('/dashboard', (req, res) => {
    // If the user is not logged in, redirect the request to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    res.render('dashboard');
});
  
    

module.exports = router;
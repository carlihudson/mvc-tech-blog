const router = require('express').Router();

const { Comment, Post, User } = require('../../models');

// get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['title', 'timestamp']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_content']
                }
            ]
        });
        console.log(userData)
        if(!userData) {
            res.status(404).json({ message: "Couldn't get users"});
            return;
        }
        res.status(200).json(userData); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// get user by id
router.get('/:id', async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: ['title', 'timestamp']
                }, 
                {
                    model: Comment, 
                    attributes: ['timestamp', 'comment_content']
                }
            ]
        });
        console.log(singleUser)
        if(!singleUser) {
            res.status(404).json({ message: "No user with this ID!"});
            return;
        }
        res.status(200).json(singleUser); 
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
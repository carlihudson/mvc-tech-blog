const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        timestamp: "02-10-2023",
        comment_content: "Oh no! What was the last action you did? There are a few things that could have happened but I need a little more detail and I'm sure I can help!"
    },
    {
        user_id: 2,
        post_id: 1,
        timestamp: "02-10-2023",
        comment_content: "omg so true. I haven't had to learn how to use a new phone since like 2008"
    },
    {
        user_id: 3,
        post_id: 3,
        timestamp: "02-09-2023",
        comment_content: "It's true. Back in the 80s if you didn't make music for more than a year or two you fell off the earth. Now with social media it's so easy to stay connected to your fans and to the general media."
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
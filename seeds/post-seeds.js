const { Post } = require('../models');

const postData = [
    {
        title: "Why Macs are Superior to PCs",
        user_id: 1,
        timestamp: "02-10-2023",
        post_content: "The technology in them keeps getting better, but the UI stays the same. It's minimalistic and easy."
    },
    {
        title: "Help!",
        user_id: 3,
        timestamp: "02-09-2023",
        post_content: "I think I accidentally deleted all of the music I've been working on off of my computer. Can someone help me?"
    },
    {
        title: "How Twitter keeps fandoms alive",
        user_id: 2,
        timestamp: "02-08-2023",
        post_content: "Before social media, once a group or artist stopped making music, they rapidly fell out of the spotlight. But now that fans can stay in the loop on their life happenings, they can stay relevant for much longer than they used to. In fact, sometimes they can even come back with raging success despite having taken years off."
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
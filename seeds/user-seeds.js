const { User } = require('../models');

const userData = [
    {
        username: 'carlirae916',
        password: 'bootcamp2023'
    },
    {
        username: 'carlyraejepsen',
        password: 'callmemaybe2012'
    },
    {
        username: 'carlysimon',
        password: 'youresovain1972'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
const { User } = require('../models');

const userData = [
    {
        "name": "Stumpy",
        "password": "pw1234"
    },
    {
        "name": "Will",
        "password": "pw1234"
    },
    {
        "name": "Ethan",
        "password": "pw1234"
    },
    {
        "name": "Serge",
        "password": "pw1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
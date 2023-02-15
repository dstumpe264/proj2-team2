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

const seedUsers = async () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;
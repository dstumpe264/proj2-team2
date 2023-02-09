const { Example } = require('../models');

const exampleData = [
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

const seedExamples = () => Example.bulkCreate(exampleData);

module.exports = seedExamples;
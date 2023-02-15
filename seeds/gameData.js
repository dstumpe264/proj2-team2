const { Game } = require('../models');

const gameData = [
    {
        "title": "Monopoly",
        "user_id": 1

    },
    {
        "title": "Scrabble",
        "user_id": 1

    },
    {
        "title": "Dungeons and Dragons",
        "user_id": 1

    },
    {
        "title": "Chess",
        "user_id": 1

    }
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
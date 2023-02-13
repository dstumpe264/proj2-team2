const { Game } = require('../models');

const gameData = [
    {
        "title": "Monopoly"

    },
    {
        "title": "Scrabble"

    },
    {
        "title": "Dungeons and Dragons"

    },
    {
        "title": "Chess"

    }
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
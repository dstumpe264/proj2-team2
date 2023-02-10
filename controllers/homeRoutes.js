const router = require('express').Router();

const { Game, Example } = require('../models');
// const withAuth = require('../utils.auth');

router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll();
        // const userData = await User.findAll();

        const games = gameData.map((game) => game.get({plain: true }));

        res.render('homepage', {
            games,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;
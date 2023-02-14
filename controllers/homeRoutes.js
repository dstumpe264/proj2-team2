const router = require('express').Router();

const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

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
});

router.get('/game/:id', async (req, res) => {
    try {
      const gameData = await Game.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const game = gameData.get({ plain: true });
  
      res.render('game', {
        ...game,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
 // Use withAuth middleware to prevent access to route
 router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Game }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
});


module.exports = router;
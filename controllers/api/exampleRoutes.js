const router = require('express').Router();
const { Example } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const exampleData = await Example.findAll();
    res.status(200).json(exampleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const exampleData = await Example.findByPk(req.params.id);

    if (!exampleData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(exampleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const locationData = await Example.create({
      name: req.body.name,
      password: req.body.password
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const exampleData = await Example.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!exampleData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(exampleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

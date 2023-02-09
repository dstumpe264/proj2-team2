const Game = require('./Game');
const Example = require('./Example');
// const User = require('./User');


// Define a User as having many Games, thus creating a foreign key in the `game` table
Example.hasMany(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Game side
Game.belongsTo(Example, {
  foreignKey: 'example_id',
});

module.exports = { Example, Game };

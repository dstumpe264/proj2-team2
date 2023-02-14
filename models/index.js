const Game = require('./Game');
const User = require('./User');


// Define a User as having many Games, thus creating a foreign key in the `game` table
User.hasMany(Game, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Game side
Game.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Game };

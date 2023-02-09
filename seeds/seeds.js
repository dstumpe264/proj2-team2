const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedGames = require('./gameData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await seedGames();

  process.exit(0);
};

seedDatabase();

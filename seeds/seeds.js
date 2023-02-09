const sequelize = require('../config/connection');
// const seedUsers = require('./userData');
const seedGames = require('./gameData');
const seedExamples = require('./exampleData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await seedUsers();
  
  await seedGames();

  await seedExamples();

  process.exit(0);
};

seedDatabase();

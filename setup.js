const mysql = require('mysql2');

console.log('Setting up Database....');

const connection = mysql.createConnection(process.env.DATABASE_URL);

console.log('Creating tables...');
connection.execute(`
    create table games
      (
        id int auto_increment,
        title varchar(500) not null,
        platform varchar(500) not null,
        year int not null,
        constraint games_pk
          primary key (id)
      );
    `, 
    function(err, results, fields){
      if (err) {
        console.error(err);
      }
      console.log(results); 
}); 
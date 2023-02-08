var express = require('express');
const mysql = require('mysql2');

var router = express.Router();

const PORT = 3001;

const connection = mysql.createConnection(process.env.DATABASE_URL);

router.get('/', function(req, res, next){

  connection.query(
    `SELECT * FROM games`,
    queryResults
  ); 

  function queryResults(err, results, fields){
    if (err) return next(err); 
    return res.json(results); 
  }
});
router.post('/', [addNewGame, returnGameById]);  


function addNewGame(req, res, next){
  connection.query(
    `INSERT INTO games
      (title, platform, year)
      VALUES (?, ?, ?)`, 
      [req.body.title, req.body.platform, req.body.year],
    queryResults
  );

  function queryResults(err, results, fields){
    if (err) return next(err); 
    req.body.id = results.insertId
    return next(); 
  }
}

function returnGameById(req, res, done){
  connection.query(`
    SELECT * FROM games
    WHERE id = ?
    `,
    [req.body.id],
    queryResults
  ); 

  function queryResults(err, results, fields){
    if (err) return next(err); 
    return res.json(results); 
  }
}
app.get('/', (req, res) => res.json(termData));
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
module.exports = router;


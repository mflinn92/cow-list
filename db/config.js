const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  // Create the cows table

  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS cows (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(40),
      description VARCHAR(200)
    );`)
  .error(err => {
    console.log(err);
  });
}
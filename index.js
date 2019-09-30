const db = require('./db');
const app = require('./app.js');
const port = 4567;

app.listen(port, () => {
  console.log(`Cow-list is listening at ${port}`);
});
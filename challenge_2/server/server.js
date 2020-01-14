const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const router = require('./router.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})


const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send("GET successful!")
})

app.post('/', (req, res) => {
  res.status(201).send("POST successful!")
})

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => {
  console.log(`Listening on ${port}`);
})


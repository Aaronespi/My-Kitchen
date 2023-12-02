const express = require('express');
const app = express();

module.exports = app;

app.get('/', async (req, res) => {
    res.send( await readFile('./index.html', 'utf8'));
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
})

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const apiRouter = require('./server/api.js');
app.use('/api', apiRouter);
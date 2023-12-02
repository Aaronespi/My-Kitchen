const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (req, res) => {
    res.send( await readFile('./index.html', 'utf8'));
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
})
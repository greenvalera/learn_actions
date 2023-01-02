const express = require('express');
const app = new express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('It works. v2');
});

app.listen(PORT, () => console.log('App is listening on port 3000.'));
'use strict';

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/health', (req, res) => {
  res.send('{"status": "OK"}');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
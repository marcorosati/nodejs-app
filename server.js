'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
var APP_MSG = process.env.APP_MSG;

// App
const app = express();
app.get('/', (req, res) => {
	res.send(APP_MSG + "\n");
	});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

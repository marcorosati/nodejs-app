'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
var APP_MSG = process.env.APP_MSG;

// App
const app = express();
app.get('/', (req, res) => {
	res.send("app_msg: " + APP_MSG + "\n");
	});

app.listen(PORT);
console.log(`Running on server on port://${PORT}`);

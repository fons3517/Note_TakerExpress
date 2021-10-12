// Requiring Express
const express = require('express');

// Creating port variable
const PORT = process.env.PORT || 3001;

// Requiring api route and html route paths
const api = require('./Router/api_routes');
const HTML = require('./Router/html_routes');

// Placing express() inside of app var
const app = express();

// Creating middleware for application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Creating access to static pages
app.use(express.static('public'));
app.use(HTML);

// Listening on ${PORT}
app.listen(PORT, () =>
console.log( `App listening at http://localhost:${PORT}`)
);

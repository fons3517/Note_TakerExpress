const express = require('express');

const PORT = process.env.PORT || 3001;

const api = require('./Router/api_routes');
const HTML = require('./Router/html_routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
app.use(HTML);



app.listen(PORT, () =>
console.log( `App listening at http://localhost:${PORT}`)
);

const express = require('express');

const PORT = process.env.PORT || 3001;

const api = require('./Router/api_routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET Route for homepage
app.get('/', (req, res) => 
res.send('Navigate to /index.html or /notes.html')
);

//GET Route for index.html
app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);


//GET Route for notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);

//POST


app.listen(PORT, () =>
console.log( `App listening at http://localhost:${PORT}`)
);

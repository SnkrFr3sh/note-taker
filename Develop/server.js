//required modules/files
const express = require('express');
const routes = require('./routes/index.js')

//port
const PORT = process.env.PORT || 3001;

//express setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

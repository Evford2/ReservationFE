const express = require("express");
const app = express();
const dbConfig = require('./db')
const siteRoute = require('./routes/siteRouter')

app.use('/api/sites' , siteRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running'));
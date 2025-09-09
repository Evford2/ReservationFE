const express = require("express");
const app = express();
const dbConfig = require('./db')
const siteRoute = require('./routes/siteRouter')

app.use('/api/sites' , siteRoute)
app.use(express.json());

app.get("/status", (req, res) => {
    const status = {
        "status" : "running"
    };

    res.send(status);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running'));
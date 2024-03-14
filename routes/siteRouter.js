const express = require("express");
const router = express.Router();

const Site = require("../models/site")

router.get("/reserve", async(req, res) => {
    try{
       const sites = await Site.find({}) 
       res.send(sites)
    } catch (error) {
        return res.status(400).json({ message: error});
    }
    

});

module.exports = router;
const express = require("express");
const router = express.Router();

const Site = require("../models/site")
const siteModel = require("../models/site")

router.get("/reserve", async(req, res) => {
    
    try{
        let types = []
        if(req.query.primitive == "true") {
            types.push("primitive");
        }
        if(req.query.tent == "true") {
            types.push("tent");
        }
        if(req.query.cabin == "true") {
            types.push("cabin");
        }
        console.log(types)
        const sites = await Site.find({"sitetype" : {"$in" : types}}); 
        res.setHeader('Access-Control-Allow-Origin', 'https://evford2.github.io')
        res.send(sites)
    } catch (error) {
        return res.status(400).json({ message: error});
    }
    

});



module.exports = router;
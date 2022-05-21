/*
 * Includes and Requires
 */
const express = require('express'),
  {
    createClient
  } = require('pexels'),
  utility = require('./utility.js');


/*
 * App Consts declarations and imports
 */
const app = express(),
  client = createClient('563492ad6f9170000100000156956241344046c8953c628fb5e032b7');


/**
 * DEFAULT API call
 */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


/**
 * API call for HOME
 */
app.get("/api", (req, res) => {
  const query = utility.getImgCatgNames(),
    color = 'Red';
  client.photos.search({
    query,
    // color,
    per_page: 40
  }).then(photos => {
    var aImageResp = photos.photos,
      aImageLinks = [];
    for (var i = 0; i < aImageResp.length; i++) {
      aImageLinks.push(
        // manipulate image src for thumbnail
        aImageResp[i].src.tiny.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=300"
      );
    }
    res.json({
      images: aImageLinks
    });
  });
});
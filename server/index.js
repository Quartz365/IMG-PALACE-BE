import express from "express";
import { createClient } from 'pexels';

const PORT = process.env.PORT || 3001;
const app = express();

const client = createClient('563492ad6f9170000100000156956241344046c8953c628fb5e032b7');
const query = 'Nature';

app.get("/api", (req, res) => {
  client.photos.search({ query, per_page: 10 }).then(photos => {
    var aImageResp = photos.photos,
    aImageLinks = [];
    for(var i=0; i<aImageResp.length;i++){
      aImageLinks.push(aImageResp[i].src.original);
    }
    res.json({ images: aImageLinks });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});








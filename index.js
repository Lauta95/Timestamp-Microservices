// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
let responseObject = {}
app.get("/api/:input", (req, res) => {
  let { input } = req.params
  res.json(input)
  console.log(typeof input);
  // const { date } = req.params;
  // res.send({ date });
  // let fecha = Math.floor(new Date().getTime() / 1000.0);
  // let json = JSON.stringify(fecha);
  // res.json({ fecha });
  // console.log(typeof date);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

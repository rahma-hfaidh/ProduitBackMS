const express = require('express');
const bodyParser = require('body-parser');

const produitRoute = require("./src/Routes/produitRoute");
const imageController = require("./src/Controllers/imageController")


var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto')



var dbConn= require('./Config/db')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5050;
var cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route

app.use(express.json())
app.use(cors({origin:"http://localhost:8081"}));

app.use('/produit',produitRoute);


app.use('/uploads',express.static('images'));


// pictureeeee
var form = "<!DOCTYPE HTML><html><body>" +
"<form method='post' action='/upload' enctype='multipart/form-data'>" +
"<input type='file' name='upload'/>" +
"<input type='submit' /></form>" +
"</body></html>";

app.get('/', function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);

});



// Include the node file module
var fs = require('fs');

storage = multer.diskStorage({
    destination: './images/',
    filename: function(req, file, cb) {
      return crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  });


const upload = multer({
  destination: './images/',
})

app.post("/upload",multer({  storage: storage }).single('upload'),imageController.postPicture);
//app.post("/uploadLogo",upload.single('file'),imageController.postLogo);

app.get('/images/:upload', function (req, res){
  file = req.params.upload;
  console.log(req.params.upload);
  var img = fs.readFileSync(__dirname + "/images/" + file);
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');

});

app.post("/uploadPromo",multer({  storage: storage }).single('upload'),imageController.postPicturePromo);



 




// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



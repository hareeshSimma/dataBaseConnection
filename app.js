var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db/connection');
var multer = require("multer");
var fs = require("fs");


// var index = require('./routes/index');
// var users = require('./routes/file');

var app = express();
app.use(express.static(path.join(__dirname, 'images')));

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log("file2");
    callback(null,path.join(__dirname + '/images/'));
  },
  filename: function (req, file, callback) {
    // console.log("file");
    callback(null, file.originalname);
  }
});
var upload2 = multer({ storage : storage}).single('myfile');

var urlbodyParser=bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.get('/',function(req,resp){
resp.render('file');
})
app.use(express.bodyParser({uploadDir:'/images'}));

app.post("/upload",urlbodyParser,function(req,resp){
  var filePath = req.files.fileupload.path;
  targetPath =  path.resolve('./uploads/image.png');

  console.log(file);

  // if (path.extname(req.files.file.name).toLowerCase() === '.png') {
       fs.rename(tempPath, targetPath, function(err) {
           if (err) throw err;
           console.log("Upload completed!");
       });
  //  } else {
      //  fs.unlink(tempPath, function () {
      //      if (err) throw err;
      //      console.error("Only .png files are allowed!");
      //  });
  //  }
// upload2(req,resp,function(err){
//   if(err){
//     return resp.end("error while uploading file");
//   }
//   else {
//     resp.render("display",{path:"images/"+file});
//   }
// })  // var path = require('path')

// fs.writeFile("/images", path, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });

})



app.listen(3030);

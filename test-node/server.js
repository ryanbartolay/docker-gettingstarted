var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())
app.get('/', function (req, res) {
   res.json([{
    "id": "1",
    "title": "Hello World.ss..!.44"
   },
   {
    "id": "2",
    "title": "Hello World2"
   },
   {
    "id": "3",
    "title": "Hello World4"
   }]);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listeningsss at http://%s:%s", host, port)
})
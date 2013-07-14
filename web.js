fs=require('fs');
var buf = new Buffer(size, encoding);
var buf = new Buffer(fs.readFileSync('file.html'), 'utf-8');
var data = fs.readFileSync("index.html"), buffer.toString("utf-8"));
response.send(data);
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


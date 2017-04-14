var fs = require("fs");


fs.stat('./package.json', function(err, stats) {
  if(err) {throw err;};

  console.log(stats);
});

var me = require("MMe");
me.ali();
me.ten();

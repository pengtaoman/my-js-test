var util = require("util");

var eventEmitter = require("events").EventEmitter;

var Myclass = function() {

};

util.inherits(Myclass, eventEmitter);

// Myclass.prototype.emit = function() {
//   console.log("########### >>>>>> ##########");
//   this.emit("myEvent","arg ---1", "arg ----2");
// };

var myIns = new Myclass();

myIns.on("myEvent",function(a, b) {
  console.log(">>>>>>>>>>>>>>>" + a + " >>>>> " + b);
});

setInterval(function() {
  console.log("******** >>>>>> setInterval");
  myIns.emit("myEvent","adfad","34242342");
}, 3000);


var tick = function() {
  var self = this;
  // setInterval(function() {
  //   console.log(" >>> setInterval function <<< ");
  //   self.emit("TT");
  // },1000);
};

util.inherits(tick, eventEmitter);

var tickIns = new tick();

tickIns.on("TT", function() {
  console.log("????????????????????????");
});

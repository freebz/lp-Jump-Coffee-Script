// Generated by CoffeeScript 1.6.2
(function() {
  var day, isFriday;

  day = new Date().getDay();

  isFriday = day === 5 ? "YES!" : "no.";

  console.log("Is it Friday? " + isFriday);

}).call(this);

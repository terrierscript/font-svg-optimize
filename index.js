var cheerio = require("cheerio")
var fs = require("fs")

var optimize = function(svg){
  var $ = cheerio.load(svg)
  var $svg = $("svg")
  var viewBox = [0, 0, $svg.attr("width"), $svg.attr("height")]
  $svg.attr("viewBox", viewBox.join(" "))
  return $.html()
}

var svg = fs.readFileSync("./sample.svg", "utf-8")

console.log(optimize(svg))
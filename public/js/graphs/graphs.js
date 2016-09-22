const bubble = require("./bubblechart.js");
const bar = require("./bargraph.js");
const pie = require("./piegraph.js");

const GraphINTERFACE = {
	bubble: bubble(),
	bar: bar(),
	pie: pie()
}
module.exports = GraphINTERFACE;


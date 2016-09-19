const Eventlist = require("./eventlist.js");

function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

module.exports = Eventlist.reduce((ob,itm) => {
	ob[itm] = {registered: false, eventName: extractEventName(itm), eventNS: itm};
	return ob;
}, {});
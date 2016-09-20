const theXHRstuff = require('./xhrRequests.js');

const EX = require("./vdom_es6");
const Layout = require("./components/layout.js");
var whenItArrives = (res) => {
   console.log('成龍大哥');
   console.log('responseAholic', res);
}

EX.createComponent(
   Layout.render(), document.getElementById('container'));


EX.viewObjects();


theXHRstuff(whenItArrives);

const theXHRstuff = require('./xhrRequests.js');

const EX = require("./vdom_es6");
const Layout = require("./components/layout.js");

EX.createComponent(
   Layout.render(), document.getElementById('container'));


theXHRstuff(Layout.githubHook, document.getElementById("theCSRF").getAttribute('value'));
